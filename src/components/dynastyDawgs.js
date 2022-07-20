import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';





class DynastyDawgs extends Component {
    render() {
        
        const [movieName, setMovieName] = useState("");
        const [review, setReview] = useState("");

        const submitReview = () => {
            Axios.post("http://localhost:3007/api/insert", {
                movieName: movieName, 
                movieReview: review
            }).then(() => {
                alert('successful insert');
            })
        };

        return (



            <div className="App">
                <h1>Dynasty Dawgs App</h1>

                <div className="form">
                    <label>Movie Name:</label>
                    <input type="text" name="movieName" onChange={(e) => {
                        setMovieName(e.target.value)
                    }}/>
                    <label>Review:</label>
                    <input type="text" name="review" onChange={(e) => {
                        setReview(e.target.value)
                    }}/>
                
                    <button onClick={submitReview}>Submit</button>
                </div>
            </div>
        )
    }
}

export default DynastyDawgs;