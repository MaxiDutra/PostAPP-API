import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import UserRoutes from '../Routes/UserRoutes';
import dbConnection from '../Database/config';

class Server {

    private app : Application;
    private port :  string;
    private apiPaths = {
        usuarioPaths: '/api/user'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.routes();
        this.connectDB();
        this.middlewares();
    }

    routes(){
        this.app.use(this.apiPaths.usuarioPaths, UserRoutes)
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`\nServer on port: ${this.port}`);
        });
    }

    middlewares(){
        this.app.use(express.json);
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(morgan("dev"));
        this.app.use(cors());
    }

    // De esta forma podemos especificar si queremos tener diferentes cadenas de conexiónes
    // dependiendo de la variable de entorno 
    async connectDB(){
        await dbConnection();
    }

}

export default Server;