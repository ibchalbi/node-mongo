
const expressEdge = require('express-edge');
const express=require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');

//Contollers
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

const app=express()

//Mongoose
mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err)) 

//assests
app.use(express.static('public'))

//Edge
app.use(expressEdge);
app.set('views', __dirname + '/views');

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/posts/new", createPostController);
app.post("/posts/store", storePostController);


/*
//rooting
app.get('/', async (req, res) => {
    // get data from mongo
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
});
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/contact',(req,res)=>{
    res.render('contact');
})
app.get('/post',(req,res)=>{
    res.render('post');
})
app.get('/posts/new', (req, res) => {
    res.render('create')
});

//Mongo insert
app.post('/posts/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        //redirection to homepage
        res.redirect('/')
    })
});

// showing one post 
app.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
});
*/
app.listen(4000,()=>{
    console.log('app listening on port 4000')
})