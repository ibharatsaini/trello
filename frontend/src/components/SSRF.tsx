import Login from './LoginForm'

function SSRF() {
  return (
    <>
    <Login />
    <div className=''>
        <iframe src='https://google.com' />
        <iframe src='http://169.254.169.254' />
        <iframe src='http://127.0.0.1:8080' />
    </div>
    </>
  )
}

export default SSRF