const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
// const router = require('express').Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/about-me', (req, res) => {
    res.sendFile(path.join(__dirname, './public/aboutme.html'));
  });
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });