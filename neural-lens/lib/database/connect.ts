import mongoose, { Mongoose } from "mongoose";
const DB_URL = process.env.MONGO_DB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!DB_URL) throw new Error("Oops!!! Mongodb Url is missing. . .");
  cached.promise =
    cached.promise ||
    mongoose.connect(DB_URL, {
      dbName: "Neural-lens",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
