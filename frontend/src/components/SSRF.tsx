import Login from './LoginForm'

function SSRF() {
  return (
    <>
    <Login />
    <div className=''>
        <iframe src='https://google.com' />
        <iframe src='' />
        <iframe src='' />
    </div>
    </>
  )
}

export default SSRF