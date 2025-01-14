import mongoose from 'mongoose';

const connectDb = async () => {
    try{
        const connected = mongoose.connect('url');
        console.log('Connected to database');
    }catch(err){
        console.log(err);
    } 
}

export default connectDb;