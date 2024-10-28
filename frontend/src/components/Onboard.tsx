
import { Button } from "@/components/ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { createBoard } from "@/lib/dbQueries";
import { useNavigate } from "react-router-dom";

function Onboard() {
  const { register, control, handleSubmit } = useForm();
  const navigate = useNavigate()
  // const {register} = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });
  const { mutate } = useMutation({
    mutationFn: createBoard,
    onSuccess: (data)=>{
      navigate(`/board/${data._id}`)
    }
  });

  function onSubmit(data: any) {
    console.log(data);
    mutate(data);
  }

  return (
    <div className="w-full h-screen m-auto flex justify-center items-center bg-gradient-to-r from-[#020024] via-[#094d79] to-[#00d4ff] h-screen">
      <Card className=" w-max p-10 shadow">
        <CardHeader className="p-0">
          <CardTitle>Create board</CardTitle>
          <CardDescription>
            Add title and members to your first board.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 mt-10">
          {/* <Form> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* Title Field */}
            <div className="flex flex-col space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter title"
              />
              {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}
            </div>

            {/* Members Array Field */}
            <div className="space-y-2 flex flex-col">
              <Label>Members</Label>
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-2">
                  <Input
                    {...register(`members.${index}` as const, {
                      required: "Member name is required",
                    })}
                    placeholder={`Member ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              {/* {errors.members && <p className="text-red-500">{errors.members.message}</p>} */}

              <Button
                type="button"
                className="w-max"
                // variant="primary"
                onClick={() => append("")} // Adds an empty string to the members array
              >
                Add Member
              </Button>
            </div>

            {/* Submit Button */}
            <Button type="submit">Submit</Button>
          </form>

          {/* </Form> */}
        </CardContent>
      </Card>

      {/* {board && <AddMembers addMem={handleMemeberChange} member={members} />} */}
    </div>
  );
}

export default Onboard;
