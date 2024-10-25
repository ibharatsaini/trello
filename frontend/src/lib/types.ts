export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};


export type LoginInput =  {
  email: string;
  password: string;
}