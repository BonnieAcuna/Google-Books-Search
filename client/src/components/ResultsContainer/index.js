import React from "react";
import BookResult from "../BookResult";

function ResultsContainer(props) {

    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results Found</h3>
                {props.bookData.map(book => {
                     return (
                    <BookResult
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    link={book.link}
                    img={book.img}
                    path={props.path}
                    key={book._id}
                    id={book._id}
                    />
                    )
                })}
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map((book) => {
                    
                        return <BookResult
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        link={book.link}
                        img={book.img}
                        id={book._id}
                        path={props.path}
                        key={book._id}/>
                    })}
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No saved books.</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;