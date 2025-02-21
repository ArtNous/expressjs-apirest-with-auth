import express, { Express, Router } from 'express';
import cookieParser from 'cookie-parser'
export default class Server {
    private app: Express;
    private port: number;
    
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cookieParser())
        this.port = Number(process.env.PORT) || 3000;
    }

    registerRoute(path: string, router: Router) {
        this.app.use(path, router);
    }
    
    start() {
        this.app.get('/', (_, res) => {
            res.send('Hello World!');
        })
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })
    }
}