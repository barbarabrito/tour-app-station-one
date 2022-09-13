import mongoose from 'mongoose';
import config from 'config';

async function connect() {

    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri);
        console.log('connected to database');
    } catch (error) {
        console.log('error. could not connect to databse');
        process.exit(1);
    }
}

export default connect;