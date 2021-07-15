import mongoose from "mongoose";


const dbConnection = async() =>{
    try
    {

    await mongoose.connect('mongodb://localhost/API-Post', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:false
    });
    console.log('Database is online');
    
    
    }
    catch(error)
    {
    console.log(error);
    throw new Error('Error al conectarse a la base de datos');
    }
    
}  


export default dbConnection; 