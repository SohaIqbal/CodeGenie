import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema(
    {
        fullname:{
       
                type:String,
                required:true,
                min: [3, 'Atleast 3 characters']

      
           
        },
        email:{
            type:String,
            required:true,
            unique:true,
            min: [8, 'Atleast 8 characters']


        },
        password:{
            type:String,
            required:true,
            select: false
            

        }

    }
)

userSchema.statics.hashpassword = async function(password){
    return await bcrypt.hash(password,10);

}
userSchema.methods.comparepassword = async function (password) {
    return await bcrypt.compare(password, this.password);

    
}

userSchema.methods.generatetoken = function () {
    return jwt.sign({email:this.email}, process.env.JWT_SECRET,  { expiresIn: "1h" })
}

const usermodel = mongoose.model('user',userSchema)
export default usermodel;