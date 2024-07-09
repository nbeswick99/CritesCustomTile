import Client from "../models/client.model.js"; 

const clientControllers = {
    //create new
    createClient: async (req, res)  => {
        try{
            const newClient = await Client.create(req.body);
            res.json(newClient);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }, 
    
    // get all
    getAllClients: async (req, res) => {
        try {
            const getAllClients = await Client.find(); // here is our query to find Meals
            res.json(getAllClients);
        } catch (error) {
            console.log(error);
            res.status(400).json(error); // here is our error response
        }
    },
    
    //get one
    getOneClient: async (req, res) => {
        try {
            const foundClient = await Client.findById(req.params.id);
            res.json(foundClient);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    
    // edit/update
    updateOneClient: async (req, res) => {
        const options = {
            new: true,
            runValidators: true,
        };
        try {
            const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedClient);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    
    // delete one
    deleteOneClient: async (req, res) => {
        try {
            const deletedClient = await Client.findByIdAndDelete(req.params.id);
            res.json(deletedClient);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}

export default clientControllers;
