import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.render('index.ejs', { postsList: allPosts });
});

app.get('/myposts', (req, res)=>{
    res.render('myposts.ejs');
});

app.get('/post', (req, res)=>{
    res.render('post.ejs');
});

let allPosts = JSON.parse(fs.readFileSync('posts.json', 'utf-8'));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}

shuffleArray(allPosts);

app.get('/myposts', (req, res) => {
    let shuffledPosts = [...allPosts];
    shuffleArray(shuffledPosts);
    res.render('post.ejs', { postsList: shuffledPosts });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

