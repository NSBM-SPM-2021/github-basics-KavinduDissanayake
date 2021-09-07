import express from "express";
import db from "./config/database.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path'

import cors from 'cors';
//FOR API ROUTES
import productRoutes from "./routes/index.js";



const PORT = process.env.PORT || 3001;

const app = express();


//Database connection check 
try {

  await db.authenticate();
  console.log('Database connected ... ');

}catch (error){

  console.error('Connection Error:', error);
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})


//TO IDENTIFY THE DIRNAME
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.use(express.static(path.resolve(__dirname, '../client/build')));

//API PATH SET
app.use(cors());
app.use(express.json());
app.use('/products',productRoutes);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});