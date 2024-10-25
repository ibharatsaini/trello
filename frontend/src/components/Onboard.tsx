import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Field from "./shared/Field";

function Onboard() {
  const form = useForm();
  const [board, setBoard] = useState();
  const [members, setMembers] = useState<string[]>(['']);

  function onSubmit(data: any) {
    setBoard(data);
  }
  function handleMemeberChange(data:any){
    setMembers((val: string[]) => {
      // if(val) return
      return [...val, data.member1];
    })
  }
  return (
    <div className="w-full h-screen m-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Field name="name" title="title" />
          {!board && <Button type="submit">Submit</Button>}
        </form>
      </Form>
      {board && <AddMembers addMem={handleMemeberChange} member={members} />}
    </div>
  );
}

function AddMembers({member,addMem}:{member:string[],addMem:Function}) {
  const form = useForm();
  function handleSubmit(data: any) {
    console.log(member);
    addMem(data)
    
    // addMem((val: string[]) => {
    //   // if(val) return
    //   return [...val, data.member1];
    // });
  }

  return (
    <div className="w-full flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="">
          {<Field name="member1" title="title" />}
          <Button type="submit">Add</Button>
        </form>
        {/* <Button onClick={} /> */}
      </Form>
      {member &&
        member.map((el: string) => {
          return (
            <>
              <div className="w-full">{el}</div>
            </>
          );
        })}
    </div>
  );
}
export default Onboard;
