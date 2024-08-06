import Login from "../models/login.model.js";

const loginControllers = {
    createLogin: async (req, res)  => {
        try{
            const newLogin = await Login.create(req.body);
            res.json(newLogin);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }, 
    
    // get all
    getAllLogins: async (req, res) => {
        try {
            const getAllLogins = await Login.find(); // here is our query to find Meals
            res.json(getAllLogins);
        } catch (error) {
            console.log(error);
            res.status(400).json(error); // here is our error response
        }
    },
    
    //get one
    getOneLogin: async (req, res) => {
        try {
            const foundLogin = await Login.findById(req.params.id);
            res.json(foundLogin);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    
    // edit/update
    updateOneLogin: async (req, res) => {
        const options = {
            new: true,
            runValidators: true,
        };
        try {
            const updatedLogin = await Login.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedLogin);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    
    // delete one
    deleteOneLogin: async (req, res) => {
        try {
            const deletedLogin = await Login.findByIdAndDelete(req.params.id);
            res.json(deletedLogin);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}

export default loginControllers;

