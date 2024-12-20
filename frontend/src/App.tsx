import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import OnBoard from '@/components/Onboard'
import Board from './Board'
import Login from './components/LoginForm'
import Home from './components/Home'


function App() {

  return (
    <>
      {/* <div className='mt-2 font-inter'> */}

        {/* <Button>Click me</Button> */}
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignupForm />}  />
            <Route path='/login' element={<Login />}  />
            <Route path='/onboard' element={<OnBoard />}  />
            <Route path="/board/:id" element={<Board />} />
        </Routes>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      {/* </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
