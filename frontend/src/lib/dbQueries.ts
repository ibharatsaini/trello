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

const getBoard = async (boardId: string) => {
  const { data } = await axiosInstance.get(`api/board/${boardId}`);
  return data.data;
};

const getLists = async () => {
  const { data } = await axiosInstance.get(`api/list/all`);
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

const updateCardFields = async(field:{id:string,title?:string,description?:string,dueDate?:(Date | string)})=>{
  if(field.dueDate) field.dueDate = new Date(field.dueDate).toISOString()
  const {data} = await axiosInstance.post(`api/card/update/${field.id}`,field)
  return data.data
}

// const getCards

export { signUp, getBoard, getLists, getCards, getCardById, login, updateCardFields };
