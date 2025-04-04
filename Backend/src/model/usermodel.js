const mongoose = require('mongoose')
const bcrypt=  require('bcrypt')
const jwt = require('jsonwebtoken')

const usermodel = new mongoose.Schema(
    {
        fullname:{
            fistname:{
                type:String,
                required:true,
                min: [3, 'Atleast 3 characters']

            },
            lastname:{
                type:String,


            }
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


usermodel.methods.generatetoken= function(){

}


const usermodel = mongoose.model('user',usermodel)