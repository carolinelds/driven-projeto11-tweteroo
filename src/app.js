import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

let users = [];
let tweets = [];

app.post("/sign-up", (request, response) => {
    const body = request.body;

    const newUser = {
        username: body.username,
        avatar: body.avatar,
    };

    users.push(newUser);
    response.send(users);
});

app.post("/tweets", (request, response) => {
    const body = request.body;

    let userTweet = users.find(user => user.username === body.username);

    const newTweet = {
        username: body.username,
        avatar: userTweet.avatar,
        tweet: body.tweet
    };

    tweets.push(newTweet);
    response.send(tweets);
});

app.get("/tweets", (request, response) => {
    let lastTen = [];
    if (tweets.length < 10) {
        for (let i = tweets.length - 1; i >= 0; i--) {
            lastTen.push(tweets[i]);
        }
    } else {
        for (let i = tweets.length - 1; i >= tweets.length - 10; i--) {
            lastTen.push(tweets[i]);
        }
    }
    response.send(lastTen);
});

app.listen(5000, () => console.log("Server is running."));