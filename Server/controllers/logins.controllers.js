import User from "../models/user.model.js";

const loginControllers = {
    loginUser: async (req, res) => {
        const {username, password} = req.body;
        try{
            const user = await User.findOne({username: username})
            if (user) {
                if (user.password === password) {
                    res.json("Sucsess")
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

