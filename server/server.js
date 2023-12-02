import chalkAnimation from 'chalk-animation';
import express from 'express';

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (request, response) => {
    response.render('index');
});

app.listen(3000, () => {
    const msg = `Server started on http://localhost:${port}`;
    const rainbow = chalkAnimation.rainbow(msg);

    setTimeout(() => {
        rainbow.stop(); // Animation stops
      }, 2000);
});