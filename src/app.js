import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let users = [];
let tweets = [];

app.post("/sign-up", (request,response) => {

});

app.post("/tweets", (request,response) => {

});

app.get("/tweets", (request,response) => {
    let lastTen = [];
    for (i = tweets.length - 1; i >= tweets.length - 10; i--){
        lastTen.push(tweets[i]);
    }
    response.send(lastTen);
});

app.listen(5000, () => console.log("Server is running."));