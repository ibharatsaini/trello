import { useContext, useEffect, useState } from "react";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { ArrowDownWideNarrow, SquareMinus } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCardById, updateCardFields } from "./lib/dbQueries";
import { CardContext } from "./Board";
import { DatePickerDemo } from "./components/DatePicker";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";

const formSchema = z.object({
  title: z.string().min(1, {
    message: `Enter title.`,
  }),
  description: z.string().optional(),
  date: z.date().optional(),
  // lastName: z.string().min(1, {
  //     message:`Last name is required.`
  // }),
  //   date: z.string(),
  // confirmPassword: z.string().min(1, {
  //     message:`Please confirm your password.`
  // })
});

function EditBoard() {
  const { cardId } = useContext(CardContext);
  const [shouldFetch, setShouldFetch] = useState(false);
  const {mutate} = useMutation({
    mutationFn:updateCardFields,
    onSuccess: ()=>null
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // if(!cardId) return <></>

  const { data: card } = useQuery({
    queryFn: () => getCardById(cardId),
    queryKey: ["card", cardId],
    enabled: shouldFetch,
  });
  useEffect(() => {
    cardId && cardId.length > 0 ? setShouldFetch(true) : setShouldFetch(false);
  }, [cardId]);
  useEffect(() => {
    setCardInfo({ ...card });
  }, [card]);

  const [cardInfo, setCardInfo] = useState({
    title: "",
    description: "",
    date: undefined,
  });

  function handleChanges(name: string, value: any) {
    console.log(cardInfo);
    setCardInfo((values) => ({
      ...values,
      [name]: value,
    }));
  }
  function onSubmit(data: z.infer<typeof formSchema>) {
    //  let dueDate
    //  if( data.date){
    //     dueDate =  data.date
    //  }
     mutate({id:card._id,...data})
  }
  console.log(form.getValues());
  if (!card) return <></>;
  return (
    <DialogContent className="bg-stone-800 outline-0 border-0 sm:max-w-[425px] md:max-w-[700px]">
      <DialogHeader>{/* <DialogTitle>Edit Card</DialogTitle> */}</DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-row w-full text-[#B6C2CF] gap-2">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <SquareMinus size={25} className="text-[#B6C2CF]" />
                <div className="flex flex-col w-full gap-4 ">
                  {/* <Label>Title</Label> */}
                  {/* <Input
              onChange={(e:any)=>handleChanges(e.target.name,e.target.value)}
              name={'title'}
              value={cardInfo.title}
              className="h-10 text-lg font-semi-bold outline-none border-0 focus:bg-stone-900 focus:border-2 focus:border-blue-600"
            ></Input> */}
                  <FormField
                    control={form.control}
                    name={"title"}
                    defaultValue={card.title}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-left">Title</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {/* <FormDescription>{description}</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <ArrowDownWideNarrow size={25} className="text-[#B6C2CF]" />
                <div className="flex flex-col w-full gap-4 ">
                  <FormField
                    control={form.control}
                    name={"description"}
                    defaultValue={card.description}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-left">Description</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {/* <FormDescription>{description}</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-40 gap-3 mt-10">
              <FormField
                control={form.control}
                name={"date"}
                defaultValue={card.dueDate}
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel className="text-left">Description</FormLabel> */}
                    <FormControl>
                      {/* <Input placeholder="" {...field} /> */}
                      <DatePickerDemo
                        fields={{ ...field }}
                        handleChanges={handleChanges}
                      />
                    </FormControl>
                    {/* <FormDescription>{description}</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <LabelPopover /> */}
            </div>
          </div>
          <Button type="submit" className="w-20 bg-blue-500 mt-10 item-end">
            Save
          </Button>
        </form>
      </Form>
      {/* <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter> */}
    </DialogContent>
  );
}

export default EditBoard;
