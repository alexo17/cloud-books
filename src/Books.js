import React, { Component } from 'react';
import SearchArea from './SearchArea';
import BookList from './BookList';
import axios from 'axios'
import TranslateArea from './TranslateArea';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            selectedLanguage: ''
        }
    }

    cleanData = (data) => {
        const cleanedData = data.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }

            if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png' };
            }

            return book;
        })

        return cleanedData;
    }

    searchBook = (e) => {
        e.preventDefault();

        axios
            .get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchField + '&key=AIzaSyD5dQ_Kc8FW72oGwh5LxYDywhzKVGRG89Y')
            .then((response) => {
                console.log(response);

                const cleanedBooks = this.cleanData(response.data.items);

                this.setState({ books: [...cleanedBooks] })
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    translateBook = (e) => {
        e.preventDefault();

        if (this.state.books != null) {

            const params = new URLSearchParams();
            params.append('q', this.state.books[0].volumeInfo.title);
            params.append('source', 'en');
            params.append('target', this.state.selectedLanguage);

            axios
                .post('https://libretranslate.de/translate', params, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((response) => {
                    console.log(response.data);

                    var newBooks = this.state.books;
                    newBooks[0].volumeInfo.title = response.data.translatedText;

                    this.setState({books: newBooks});
                })
        }
    }

    setLanguage = (e) => {
        this.setState({ selectedLanguage: e.target.value })
    }

    render() {
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <TranslateArea translateBook={this.translateBook} setLanguage={this.setLanguage} />
                <BookList books={this.state.books} />
            </div>
        )
    }
}

export default Books;
