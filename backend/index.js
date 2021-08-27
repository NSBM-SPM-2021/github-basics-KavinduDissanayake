import  express  from "express";

const app = express();

app.get('/', (req,res) => {
    res.send('welcome');
});

app.listen(6000, () => console.log('Server running ar port 6000'));