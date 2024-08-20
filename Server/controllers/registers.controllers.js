import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createToken from "../services/createToken.js";

const registerControllers = {
    registerUser: async (req, res) => {
        try{
            const {name, username, password } = req.body;

            const exists = await User.findOne({username})
            if (exists) {
                res.json("Username exists")
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            const newUser = await User.create({name, username, password: hash});

            const token = createToken(newUser._id);
            res.json({user: newUser, token});

        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    getUsernames: async (req, res) => {
        try{
            const allUsers = await User.find();
            const allUsernames = []
            allUsers.forEach((eachUser) => {
                allUsernames.push(eachUser._id)
            })
            res.json(allUsernames)
            
        } catch (error) {
            console.log(error);
            res.status(400).json(error)
        }
    }
}
export default registerControllers