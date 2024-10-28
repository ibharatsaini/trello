import axiosInstance from "./configureAxios";
import { LoginInput, UserInput } from "./types";

const signUp = async (user: UserInput) => {
  const { data } = await axiosInstance.post("api/auth/sign-up", user);
  return data.data;
};

const login = async (loginForm: LoginInput) => {
  const { data } = await axiosInstance.post("api/auth/login", loginForm);
  return data.data;
};

const getBoardById = async (boardId: string) => {
  const { data } = await axiosInstance.get(`api/board/${boardId}`);
  return data.data;
};

const getLists = async (boardId:string) => {
  const { data } = await axiosInstance.get(`api/list/all/${boardId}`);
  return data.data;
};

const getCards = async (listId:string) => {
  console.log(listId)
  const { data } = await axiosInstance.get(`api/list/cards/${listId}`);
  console.log(data)
  return data.data;
};

const getCardById = async (id: string) => {
  const { data } = await axiosInstance.get(`api/card/${id}`);
  return data.data;
};


const createBoard = async(fields:{title:string,memebers:string[]})=>{
  const {data} =await axiosInstance.post(`api/board/create`,fields)
  return data.data
}

const getBoard = async ()=>{
  const {data} = await axiosInstance.get(`api/board/get-board`)
  return data.data
}

const getAllBoard = async ()=>{
  const {data} = await axiosInstance.get(`api/board/all`)
  return data.data
}

const validateUser  = async ()=>{
  try{
    const {data} = await axiosInstance.get(`api/auth/validate-user`)
    return data.data
  }catch(e){
    return false
  }
}

const updateCardFields = async(field:{id:string,title?:string,description?:string,dueDate?:(Date | string)})=>{
  if(field.dueDate) field.dueDate = new Date(field.dueDate).toISOString()
  const {data} = await axiosInstance.post(`api/card/update/${field.id}`,field)
  return data.data
}
const createList = async (field:{title:string,boardId:string})=>{
  const {data} = await axiosInstance.post(`api/list/create/${field.boardId}`,{title:field.title})
  return data.data
}

const createCard = async (field:{title:string,listId:string})=>{
  const {data} = await axiosInstance.post(`api/card/create/${field.listId}`,{title:field.title})
  return data.data
}
// const getCards

export { signUp, getAllBoard, getBoard, validateUser, getBoardById, getLists, createList, createCard, getCards, getCardById, login, updateCardFields, createBoard };
