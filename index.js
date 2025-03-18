const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to My Express App!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            color: white;
            padding: 50px;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 20px;
          }
          p {
            font-size: 1.5em;
            margin-top: 10px;
          }
          .emoji {
            font-size: 2em;
          }
        </style>
      </head>
      <body> <!-- Fixed body tag -->
        <h1>Welcome to my Express App! 🚀</h1>
        <p>I hope you're having a great day! 🌟</p>
       
        <footer>
          <p>Made with JavaScript</p>
        </footer>
      </body> <!-- Added closing body tag -->
    </html>
  `);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
