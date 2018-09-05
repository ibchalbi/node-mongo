/*const http=require('http');

const fs=require('fs');

const aboutPage=fs.readFileSync('about.html')
const contactPage=fs.readFileSync('contact.html')
const homePage=fs.readFileSync('index.html')

const server=http.createServer((request,response)=>{
    console.log(request.url);

    if(request.url=='/about'){
        return response.end(aboutPage);
    }
    else if(request.url=='/contact'){
        return response.end(contactPage);
    }
    else if(request.url=='/'){
        return response.end(homePage);
    }
    else{
       response.writeHead(404);
       response.end('this page was not found');
    }
    
})
server.listen(3000);*/



const path=require('path')
const express=require('express')

const app=express()

app.use(express.static('public'))

app.get('/',(request,response)=>{
    console.log("getting a request for the homepage")
    response.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about',(request,response)=>{
    console.log("getting a request for the aboutpage")
    response.sendFile(path.resolve(__dirname,'about.html'))

})

app.get('/contact',(request,response)=>{
    console.log("getting a request for the contactpage")
    response.sendFile(path.resolve(__dirname,'contact.html'))

})

app.listen(3000,()=>{
    console.log('app listenning on port 3000')
})

