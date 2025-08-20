import usermodel from "../model/usermodel.js"


export const createuser = async (
    {fullname, email,password}) => {
    if(!fullname || !email || !password)
        throw new Error("Fullname, email and password are required");

    const hashedpassword = await usermodel.hashpassword(password);    
   
        // ✅ Create user in MongoDB
        const user = await usermodel.create({
            fullname,
            email,
            password: hashedpassword,
        });

        return user; // ✅ Return the created user
   
}