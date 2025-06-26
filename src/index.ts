import express, { Request, Response } from 'express';
import db from '../src/utils/dbConnection'; 

import { Sequelize } from 'sequelize';

const app = express();
const PORT = 3000;

app.use(express.json());

db.authenticate()
.then(()=>{
    return db.sync({alter:true})
}).catch((e:Error)=>{
    console.log(e.message);
})


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Express!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

