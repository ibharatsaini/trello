import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import Field from "./shared/Field";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/lib/dbQueries";
import { Card } from "./ui/card";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: `Enter valid email.`,
    })
    .email("This is not a valid email."),
  firstName: z.string().min(1, {
    message: `First name is required.`,
  }),
  lastName: z.string().min(1, {
    message: `Last name is required.`,
  }),
  password: z.string().min(8, {
    message: `Password is required and must be 8 characters long.`,
  }),
  confirmPassword: z.string().min(1, {
    message: `Please confirm your password.`,
  }),
});

function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const {isAuthenticated,handleAuthentication}  = useAuth()
  // const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: signUp,
      onSuccess: ()=>{
        handleAuthentication(true)
        // navigate(`/onboard`)
      } 
  })
  useEffect(()=>{
    isAuthenticated && navigate(`/onboard`)
  },[isAuthenticated])
  // const [signup, setSetup] = useState({
  //     email:'',
  //     firstName:'',
  //     lastName:'',
  //     password:'',
  //     confirmPassword:""
  // })
  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(data);
    // axiosInstance.post("api/auth/sign-up",data).then((res)=>{
    //     if(res.data.data.email)  navigate("/onboard")

    // })
  }

  return (
    <div className="w-full h-screen flex flex-row items-center">
      <div className="w-full h-full bg-blue-400	"></div>
      <Card className="w-[600px] m-10    p-10">
        {/* <div className='w-72 h-full m-auto'> */}
        <h2 className="text-2xl text-center font-semibold mb-10">
          Create Account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <Field name="email" title="Email" />
            <div className="flex gap-2 flex-row justify-between">
              <Field name="firstName" title="First name" />
              <Field name="lastName" title="Last name" />
            </div>
            <Field
              name="password"
              title="Password"
              description="Password must have 8 characters."
            />
            <Field name="confirmPassword" title="Confirm Password" />

            <Button type="submit" className="w-full  bg-blue-700">
              Sign In
            </Button>
          </form>
        </Form>

        {/* </div> */}
      </Card>
    </div>
  );
}

export default SignupForm;
