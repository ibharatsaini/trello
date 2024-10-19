"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, firstName, lastName, password } = req.body;
        console.log(email, firstName, lastName);
        // const user = await (await User.create({email,firstName,lastName,password})).save()
        // // await user.save()
        // console.log(user)
        // if(!user) throw new Error("User not created.")
        res.status(200).json({
            data: {
                email,
                firstName,
                lastName,
                password
            }
        });
        return;
    }
    catch (err) {
        res.status(401).json({
            message: `User Input invalid.`
        });
        return;
    }
});
exports.signUp = signUp;
