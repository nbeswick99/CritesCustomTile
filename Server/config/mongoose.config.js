import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async (DB_NAME) => {
    try {
        await connect(MONGODB_URI, {
            dbName: DB_NAME,
        });
        console.log(`Deployment has been pinged. You are connected to ${DB_NAME}!`);
    } catch (error) {
        console.log(`ERROR ERROR ERROR connection to ${DB_NAME}`, error);
        throw error;
    }
}
export default dbConnect;

