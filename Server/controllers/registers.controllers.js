import User from "../models/user.model"

const registerControllers = {
    registerUser: async (req, res) => {
        try{
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
}
export default registerControllers