import React from "react";
import axios from'axios';

import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get('/api/books/').then(res=>{
            this.setState({bookData:res.data});
        }).catch(err => console.log(err));
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({bookInput: event.target.value})
    }

    handleSearchClick(event) {
        event.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0)?
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path}/> : null
                }
            </main>
        );
    }
}

export default Search;