const { HttpStatusCode } = require('axios');
const { response } = require('express');
const express = require('express');
const { randomBytes } = require('crypto')
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors());

// ----------------------- POST SERVICE -------------------- //

const posts = {
    // "slekdoiedj76uea":{
    //     id : "slekdoiedj76uea",
    //     title : "mon blog"
    // }
}

app.get('/posts', (req, res) =>{
    res.send(posts);
})
app.post('/posts', (req, res) => {
    // create id
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id,
        title
    };
    res.status(200).send(posts[id]);
})

// ---------------- COMMENTS SERVICE --------------------- 
const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(200).send(comments);
});

app.listen(4001, () => {
    console.log('App listening on http://localhost:4001')
})
