import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createToken from "../services/createToken.js";

const loginControllers = {
    loginUser: async (req, res) => {
        const {username, password} = req.body;
        try{
            const user = await User.findOne({username: username})
            if (user) {
                const match = await bcrypt.compare(password, user.password)
                if (match) {
                    const token = createToken(user._id)
                    res.json({user, token})
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No records existed")
            }
        }
        catch (error){
            console.log(error);
            res.status(400).json(error);
        }
    }
}

export default loginControllers;

