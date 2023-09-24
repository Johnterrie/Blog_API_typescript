import mongoose from "mongoose" 

const connectDB = (uri: string) => {
    const db = mongoose.connect(uri, {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    }).then(() => {
        console.log("connected to database");
    }).catch((error) => {
        console.log("error connecting to database" + error);
    })
    return db
}

export default connectDB