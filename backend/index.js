import  express  from "express";

const app = express();

<<<<<<< HEAD
app.get('/', (req,res) => {
    res.send('welcome');
});

app.listen(6000, () => console.log('Server running ar port 6000'));
=======
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
>>>>>>> f9df775a631920aaa24fe852d8fc0e1871b9f0a7
