import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.render('index.ejs');
});

app.get('/myposts', (req, res)=>{
    res.render('myposts.ejs');
});

app.get('/post', (req, res)=>{
    res.render('post.ejs');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

