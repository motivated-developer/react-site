const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'georgiamysql1478963',
    database: 'dynastydawgs',
    port: 3307
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=> {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;    
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
    
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result);
    })
})

app.listen(3007, () => {
    console.log("running on port 3007")
});