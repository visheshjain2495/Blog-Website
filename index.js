import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let allPosts = JSON.parse(fs.readFileSync('posts.json', 'utf-8'));
let myposts = JSON.parse(fs.readFileSync('myposts.json', 'utf-8'));

app.get('/', (req, res)=>{
    res.render('index.ejs', { postsList: allPosts });
});

app.get('/post', (req, res)=>{
    res.render('post.ejs');
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}

shuffleArray(allPosts);

app.post("/submit", (req, res) => {
    myposts.push(req.body);
    allPosts.push(req.body);
    fs.writeFileSync('myposts.json', JSON.stringify(myposts, null, 2), 'utf-8');
    fs.writeFileSync('posts.json', JSON.stringify(allPosts, null, 2), 'utf-8');
    res.render("post.ejs", {message : "Post Submitted!"});
});

app.get('/myposts', (req, res)=>{
    res.render('myposts.ejs', { MyPosts: myposts });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

