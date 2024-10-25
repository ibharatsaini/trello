import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormContext } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axiosInstance from '@/lib/configureAxios'
import { useNavigate } from "react-router-dom"
import Field from "./shared/Field"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login, signUp } from "@/lib/dbQueries"
import { User, UserInput } from "@/lib/types"

const formSchema = z.object({
    email: z.string().min(1, {
        message:`Enter valid email.`
    }).email("This is not a valid email."),

    password: z.string().min(8, {
        message:`Password is required and must be 8 characters long.`
    }),
    
})

function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })
    const navigate = useNavigate()
    // const queryClient = useQueryClient()
    const {mutate}= useMutation({
        mutationFn: login,
        onSuccess: ()=>{
            // navigate(`/onboard`)
        }
    })
    // const [signup, setSetup] = useState({
    //     email:'',
    //     firstName:'',
    //     lastName:'',
    //     password:'',
    //     confirmPassword:""
    // })
    function onSubmit(data: z.infer<typeof formSchema>){
        mutate(data)
        // axiosInstance.post("api/auth/sign-up",data).then((res)=>{
        //     if(res.data.data.email)  navigate("/onboard")
       
        // })
        
    }

   




  return (
    <div className='w-72 h-full m-auto'>
        <h2 className='text-2xl text-center font-semibold mb-10'>Login</h2>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <Field name='email' title='Email' />
        {/* <div className='flex gap-2 flex-row justify-between'>
            <Field name='firstName' title='First name' />
            <Field name='lastName' title='Last name' />
        </div> */}
        <Field name='password' title='Password' description='Password must have 8 characters.' />
        {/* <Field name='confirmPassword' title='Confirm Password' /> */}

        
        <Button type="submit" className='w-full  bg-blue-700' >Sign In</Button>
      </form>
    </Form>
        
    </div>
  )
}




export default Login


