import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import OnBoard from "@/components/Onboard";
import Board from "./Board";
import Login from "./components/LoginForm";
import Home from "./components/Home";

import { AuthProvider } from "./context/AuthContext";
import SSRF from "./components/SSRF";
import SSRF2 from "./components/SSRF2";

function App() {
  // const
  return (
    <>
      {/* <div className='mt-2 font-inter'> */}

      {/* <Button>Click me</Button> */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ssrf" element={<SSRF />} />
          <Route path="/ssrf2" element={<SSRF2 />} />
          {/* <Route  element={<ProtectedRoute />}> */}
            <Route path="/onboard" element={<OnBoard />} />
            <Route path="/board/:id" element={<Board />} />
          {/* </Route> */}
        </Routes>
      </AuthProvider>
      
    </>
  );
}

export default App;
