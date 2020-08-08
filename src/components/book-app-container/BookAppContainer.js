import React, {Component} from 'react';
import Catalog from '../catalog';
import axios from 'axios';
import SearchForm from '../search-form';
import BookDetails from '../book-details';

const API_TOKEN = 'key1mTtH9w21weLOE';

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appxi3gn8Dj1b50h7',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

class BookAppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: null,
            selectedBook: null,
            searchQuery: ''
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    componentDidUpdate() {
        const {books, searchQuery} = this.state;

        if (!books) {
            this._fetchData(searchQuery);
        }
    }

    selectBook(book) {
        this.setState({
            ...this.state,
            selectedBook: book
        });
    }

    search(searchQuery) {
        this.setState({
            books: null,
            selectBook: null,
            searchQuery
        })
    }

    renderBookDetails() {
        const {selectedBook} = this.state;

        if (selectedBook) {
            return <BookDetails book={selectedBook} />
        }

        return;
    }

    render() {
        const {books} = this.state;

        return (
            <React.Fragment>
                <SearchForm onSubmit={(q) => this.search(q)} />

                {books ?
                    <div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {this.renderBookDetails()}
                            </div>
                        </div>
                        <Catalog books={books} onSelect={(book) => this.selectBook(book)} />
                    </div>
                    : <p>Loading...</p>}
            </React.Fragment>
        );
    }

    _fetchData(searchQuery) {

        axios.all([
            httpClient.get('/Books', {
                params: {
                    filterByFormula: searchQuery && `SEARCH('${searchQuery}',LOWER({title}))`
                }
            }),
            httpClient.get('/Authors')
        ])
            .then(axios.spread((booksData, authorsData) => this._mapFromAirTable(booksData.data.records, authorsData.data.records)))
            .then(books => this.setState({...this.state, books}))
            .catch(errors => {
                console.error(errors);
                this.setState({...this.state, books: null});
            })
    }

    _mapFromAirTable(booksRecords, authorsRecords) {

        const mapAuthors = (authors) => {
            return authors.map(id => {
                const author = authorsRecords.find(r => id === r.id);

                return {
                    id: author.id,
                    name: author.fields.name,
                    email: author.fields.email,
                    avatar: author.fields.avatar,
                    description: author.fields.description
                }
            })
        }

        return booksRecords.map(b => ({
            id: b.id,
            title: b.fields.title,
            pageCount: b.fields.pageCount,
            language: b.fields.language,
            progress: b.fields.progress,
            cover: b.fields.cover,
            authors: mapAuthors(b.fields.authors),
            minPrice: b.fields.minPrice,
            expectedPrice: b.fields.expectedPrice,
            total: b.fields.total,
            expectedTotal: b.fields.expectedTotal,
            followers: b.fields.followers
        }));
    }
}

export default BookAppContainer;
