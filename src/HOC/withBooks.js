import React from 'react';
import axios from 'axios';
const API_TOKEN = 'key1mTtH9w21weLOE';

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appxi3gn8Dj1b50h7',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

const withBooks = (Component) => {
    return class WithBooks extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                books: null,
                searchQuery: ''
            }
        }

        static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.searchQuery !== prevState.searchQuery) {
                return {
                    books: null,
                    searchQuery: nextProps.searchQuery
                }
            }

            return null;
        }

        componentDidMount() {
            this._fetchData();
        }

        componentDidUpdate() {
            const {books} = this.state;

            if (!books) {
                this._fetchData(this.props.searchQuery);
            }
        }

        render() {
            const {books} = this.state;

            return <Component isLoading={!books} books={books} onSelect={this.props.onSelect} />
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
}

export default withBooks;