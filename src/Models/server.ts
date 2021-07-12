import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

class Server {

    private app : Application;
    private port : string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Server on port: '+ this.port);
        });
    }

    middlewares(){
        this.app.use(express.json);
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }

}

export default Server;