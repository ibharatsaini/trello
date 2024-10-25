import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";


export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Password is required."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  // tokens: {
  //   access_token: {
  //     type: String,
  //   },
  //   refresh_token: {
  //     type: String,
  //   }, 
  // },
});

userModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


userModel.methods.comparePassword = function(password:string){
   const passwordHash = this.password
   return new Promise((resolve,reject)=>{
    bcrypt.compare(password,passwordHash, function(err,same){
        if(err) return reject(err)
        return   resolve(same)
    })
   })
}


userModel.methods.updatePassword = async function(){
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(this.password,salt )
}




const User: Model<IUser> = mongoose.model<IUser>("user", userModel);

export default User;
