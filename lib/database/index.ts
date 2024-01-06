import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any ).mongoose || {conn:null, Promise: null };

export const connectToDatabase = async() => {
    if(cached.conn){
        return cached.connect;
    }
    if(!MONGODB_URI) throw new Error('MongoDb uri is missing');
    cached.Promise = cached.Promise ||  mongoose.connect(MONGODB_URI, {
        dbName: 'eventify',
        bufferCommands: false
    })
    cached.conn = await cached.promise;
    return cached.conn;
}