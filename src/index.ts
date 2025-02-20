import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (_: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})