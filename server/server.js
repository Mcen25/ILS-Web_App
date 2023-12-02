import chalkAnimation from 'chalk-animation';
import express from 'express';

const app = express();

const port = 3000;
app.get("/", (request, response) => {
    response.json("test");
});

app.listen(3000, () => {
    const msg = `Server started on http://localhost:${port}`;
    const rainbow = chalkAnimation.rainbow(msg);

    setTimeout(() => {
        rainbow.stop(); // Animation stops
      }, 2000);
});