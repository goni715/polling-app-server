import express, {Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response)=> {
    res.send('This is Express Pollig Application Server');
})


export default app;