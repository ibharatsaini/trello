// AuthContext.tsx
import { validateUser } from "@/lib/dbQueries";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  handleAuthentication: (auth:boolean)=>void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {data,error,isLoading} = useQuery({
    queryFn: ()=>validateUser(),
    queryKey: ['uservalidate'],
  
  })

  const handleAuthentication = (isAuthenticated:boolean) =>{
     setIsAuthenticated(isAuthenticated)
  }


  useEffect(()=>{
    // console.log(data)
     if(data && data._id) setIsAuthenticated(true)
  },[data])

  if(error){
    console.log(error)
    setIsAuthenticated(false)
  }

  if(isLoading) return <></>

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
