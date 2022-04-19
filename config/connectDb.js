const mongoose = require('mongoose'); 

const connectDb =async()=> {
    // Connecting database to server...
    try {
        // local database path
        //naming the Database (mongooseCP)
     await   mongoose.connect('mongodb://127.0.0.1:27017/mongooseCP')
     console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDb