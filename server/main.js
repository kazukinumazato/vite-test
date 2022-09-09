const express = require("express");
const app = express();

app.use(express.json());

// Vite によって出力されたディレクトリを配信する
app.use(express.static("dist"));

app.listen(3000);