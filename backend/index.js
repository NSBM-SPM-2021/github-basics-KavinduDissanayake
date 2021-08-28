import express from "express";
import db from "./config/database.js";
//Page routing 
import productRoutes from "./routes/index.js";
import cors from 'cors';

const app = express();

//CHECK DATABASE CONNECTION
try {
    await db.authenticate();
    console.log('Database connected ... ');

}catch (error){

    console.error('Connection Error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/products',productRoutes);


//SERVER CURRENT REUNNING PORT 
app.listen(5000, () => console.log('Server running ar port 5000'));