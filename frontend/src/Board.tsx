import { createContext, useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./lib/configureAxios";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { createCard, createList, getBoardById, getCards, getLists } from "./lib/dbQueries";
import { FormInput, Pencil, Star } from "lucide-react";
import { Reorder } from "framer-motion";
import EditBoard from "./EditBoard";
import { Dialog, DialogTrigger } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./components/ui/button";

interface CardContextType {
  cardId: string;
  handleCardId: Function;
}

export const CardContext = createContext<CardContextType>({
  cardId: "",
  handleCardId: () => null,
});

function Board() {
  const { id } = useParams();
  const queryClient = new QueryClient()
  const navigate = useNavigate()
  if(!id) navigate(`/onboard`)


  const { data: lists } = useQuery({
    queryKey: ["lists", id],
    queryFn: () => getLists(id as string),    
  });
  const {mutate} = useMutation({
    // mutationKey: 
    mutationFn: createList,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['lists','cards']})
    }
  })
  const [cardId, setCardId] = useState("");

  const handleCardId = (id: string) => {
    setCardId(id);
  };

  useEffect(() => {
    axiosInstance
      .get(`api/board/${id}`)
      .then(({ data }) => console.log(data))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <CardContext.Provider value={{ cardId, handleCardId }}>
      <Dialog>
        <div className="w-full">
          <SidebarProvider>
            <div className="w-full h-full flex fle-row bg-[#af2a74]">
              <div className="w-72">
                <AppSidebar />
              </div>
              <div className="w-full h-screen flex flex-col">
                <BoardHeader />
                <div className="w-full h-screen p-8 box-border gap-4 flex flex-row">
                  {lists &&
                    lists.map((el: any) => <List key={el._id} lists={el} />)}
                  <AddList mutationFn={mutate} />
                </div>
              </div>
            </div>
          </SidebarProvider>
          <EditBoard />
          {/* </Dialog> */}
        </div>
      </Dialog>
    </CardContext.Provider>
  );
}

function BoardHeader() {
  const { id } = useParams();

  if (!id) return <></>;
  const { data } = useQuery({
    queryKey: ["baord", id],
    queryFn: () => getBoardById(id),
  });
  console.log(data);
  // useEffect(()=>{
  //   if(status == 'pending')
  // },[status])
  return (
    <section className="max-w-full box-border text-white font-extrabold flex px-6 py-2 items-center flex-row h-20 bg-[#0000003d]">
      <div className="w-full h-full flex  items-center">
        <h2 className="text-lg">{data && data.title}</h2>
        <div className="w-8 ml-5 h-7 flex items-center justify-center bg-transparent cursor-pointer rounded hover:bg-[rgba(193,178,186,0.2)]">
          <Star className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}

function List({ lists }: { lists: any }) {
  const { data: card } = useQuery({
    queryKey: ["cards", lists._id],
    queryFn: () => getCards(lists._id),
  });
  // console.log(lists._id,card)
  const [cards, setCards] = useState<any[]>([]);
  useEffect(() => {
    console.log(card);
    card && setCards([...card.cards]);
    console.log(cards);
  }, [card]);
  // const [items,setItems] = useState(['asdg','asg','adg'])
  // const
  // setItems(()=>)
  // if(cards.length == 0) return <></>
  return (
    <Reorder.Group axis="y" values={cards} onReorder={setCards}>
      <div className="min-w-64 bg-[#101204] text-[#B6C2CF] rounded-xl px-4 py-4">
        <h2>{lists.title}</h2>
        <div className="mt-3 flex gap-2 flex-col">
          {cards &&
            cards.map((item: any) => (
              <Reorder.Item key={item._id} value={item}>
                <Card card={item} />
                {/* <Card  />
            <Card  />
            <Card  /> */}
              </Reorder.Item>
            ))}
            <AddCard listId={lists._id} />
            
        </div>
      </div>
    </Reorder.Group>
  );
}

function Card({ card }: { card: any }) {
  const [active, setActive] = useState(false);
  console.log(card);
  const { handleCardId } = useContext(CardContext);
  // const []
  return (
    // <CardContext.Provider value={}>
    <div
      className="c hover:outline hover:outline-2 rounded p-2 relative cursor-pointer"
      onMouseOut={() => setActive(false)}
      onMouseOver={() => setActive(true)}
    >
      {active && (
        <DialogTrigger asChild>
          <Pencil
            onClick={() => handleCardId(card._id)}
            className="absolute box-content top-1 right-0 mr-2  w-[13px] opacity-50 hover:bg-[rgba(255,255,255,0.1)] p-1 px-2 rounded-full"
          />
        </DialogTrigger>
      )}
      <h3>{card.title}</h3>
    </div>
  );
}


const listSchema = z.object({
  title: z.string()
})

function AddList({mutationFn}:{mutationFn:Function}) {
  const { id } = useParams()
  const [listForm, setListForm] = useState(false)
  const form = useForm<z.infer<typeof listSchema>>({
    resolver: zodResolver(listSchema),
    defaultValues: {
      title:""
    }
  })
  function onSubmit(data:any){
    console.log(data)
    mutationFn({
      ...data,
      boardId:id
    })
  }

  
  return (
    <div className="min-w-64 bg-[#101204] text-[#B6C2CF] h-max rounded-xl px-4 py-4">
      {/* <h2>{lists.title}</h2> */}
     { listForm ? (<>
        <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                    control={form.control}
                    name={"title"}
                    // defaultValue={card.title}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-left">Title</FormLabel>
                        <FormControl>
                          <Input placeholder="sldf" {...field} />
                        </FormControl>
                        {/* <FormDescription>{description}</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row gap-2">
                <Button type="submit" className="mt-2">Add list</Button>
                <Button variant={'destructive'} onClick={()=>setListForm(false)} className="mt-2">Remove</Button>


                  </div>
              </form>
        </Form>
     </>) : (<div onClick={()=>setListForm(true)} className="mt-3 flex gap-2 flex-col cursor-pointer">
          + Add list
        
      </div>)}

    </div>
  );
}



function AddCard({ listId}:{listId:string}) {
  // const { id } = useParams()
  const [listForm, setListForm] = useState(false)
  const queryClient = new QueryClient()
  const {mutate} = useMutation({
    mutationFn: createCard,
    onSuccess: ()=>queryClient.invalidateQueries({queryKey:['cards']})
  })
  const form = useForm<z.infer<typeof listSchema>>({
    resolver: zodResolver(listSchema),
    defaultValues: {
      title:""
    }
  })
  function onSubmit(data:any){
    console.log(data)
    mutate({
      ...data,
      listId:listId
    })
  }

  
  return (
    <div className="min-w-64 bg-[#101204] text-[#B6C2CF] h-max rounded-xl px-4 py-4">
      {/* <h2>{lists.title}</h2> */}
     { listForm ? (<>
        <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                    control={form.control}
                    name={"title"}
                    // defaultValue={card.title}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-left">Title</FormLabel>
                        <FormControl>
                          <Input placeholder="sldf" {...field} />
                        </FormControl>
                        {/* <FormDescription>{description}</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row gap-2">
                <Button type="submit" className="mt-2">Add list</Button>
                <Button variant={'destructive'} onClick={()=>setListForm(false)} className="mt-2">Remove</Button>


                  </div>
              </form>
        </Form>
     </>) : (<div onClick={()=>setListForm(true)} className="mt-3 flex gap-2 flex-col cursor-pointer">
          + Add Card
        
      </div>)}

    </div>
  );
}

export default Board;
