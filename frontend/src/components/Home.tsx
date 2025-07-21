import JelloImage from '../assets/Jello.webp'
import { Separator } from '@radix-ui/react-separator'

function Home() {
  return (
    <>
    <Header />
    <div className='h-screen p-20 flex flex-row' style={{
        background: "linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180))",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundOrigin: "padding-box",
        backgroundClip: "border-box",
        backgroundColor: "rgb(82, 67, 170)", // Fallback background color
      }}>
        <div className='flex flex-col text-white h-full gap-2 justify-center w-1/2 '>
            <h1 className='text-5xl text-extrabold'>Jello brings all your tasks, teammates, and tools together</h1>
            <p className=''>Keep everything in the same place—even if your team isn’t.</p>
        </div>
        <div className='w-1/2 items-center justify-center flex mt-40'>
            <img alt={'Image Cover'} src={JelloImage} />
        </div>

    </div>
    <div className='w-full flex flex-row justify-center flex-wrap p-32 gap-32   '>
        <Card className='bg-orange-500 ' project='Project Management' desc={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'} />
        <Card className='bg-blue-500' project='Meetings' desc={'Empower your team meetings to be more productive, empowering, and dare we say—fun.'} />
        <Card className='bg-teal-400'   project='Task management' desc={'Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.'} />
        <Card className='bg-yellow-500' project='Onboarding' desc={'Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.'} />

    </div>
    <div id='pricing' className='w-full flex flex-row justify-center p-20 gap-20 bg-gradient-to-b from-[#e6fcff] to-[#ffffff]'>
        <PricingCard type={'free'} desc='Free for your whole team' price={0} features='For individuals or teams looking to organize any project.'   buttonText='Get Started' />
        <PricingCard type={'standard'} desc='If billed annually (10000 billed monthly)' price={1000} features='For small teams that need to manage work and scale collaboration.'   buttonText='Coming soon' />
        <PricingCard type={'premium'} desc='If billed annually (30000 billed monthly)' price={3000} features='For organizations that need to connect work across teams with more security and controls.'   buttonText='Coming soon' />

    </div>
    </>
  )
}




function Card({className,project,desc}:{className?:string, project:string,desc:string}){
    return (
        <div className='w-96 flex flex-col rounded-b-md shadow-xl    shadow-[#0000000f]'>
            <div className={`h-10 w-full rounded-t-md  ${className}`}>
            </div>
            <div className='flex flex-col w-full p-10 px-4 shadow-black'>
                <h2 className='text-2xl font-medium text-black p-0'>{project}</h2>

                <div className='mt-2'>
                    {
                        desc
                    }
                </div>
            </div>
        </div>
    )
}



function PricingCard({type,price,desc,features,buttonText}:{type:string,price:number,desc:string,features:string,buttonText:string}){
    return (
        <div className='flex flex-col w-72 gap-10 border bg-white py-6 px-5'>
            <h2 className='uppercase text-md font-medium'>{type}</h2>
            <h3 className=''>
            &#8377;<h2 className='inline text-3xl font-medium'>{price}</h2>/m
            <p className='text-xs text-gray-500'>{desc}</p>

            </h3>
            <div className=''>
                {features}
            </div>
            <div className='mt-40 mb-10 cursor-pointer justify-end'>
                {
                    buttonText
                }
                <Separator className='h-1 bg-gray-900 w-32' />
            </div>

        </div>
    )
}


function Header(){
    return (
        <header className='w-full bg-white px-32 h-16 bg-slate-100 flex flex-row justify-between items-center fixed top-0'>
            

            <div className='flex gap-10 items-center'>
                <h2 className='text-2xl'>Jello.</h2>
                <a href='#pricing' className='p-0 text-black text-sm'>Pricing</a>
            </div>
            <div className='flex gap-5'>
                <a href='/login' className='text-black'>Log in</a>
                <a href='/sign-up' className=''>Try for free</a>
                <a href='/ssrf' className='underline white'>Try for free</a>
            </div>
        </header>
    )
}

export default Home