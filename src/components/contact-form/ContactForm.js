import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            question: ''
        }
    }

    setField(name, e) {
        this.setState({
            ...this.state,
            [name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault();
        
        const {name, email, question} = this.state;
        console.log({name, email, question});
    }

    render() {
        const {name, email, question} = this.state;

        return (
            <form className='jumbotron' onSubmit={(e) => this.submitForm(e)}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className="form-control" id='name' value={name} onChange={(e) => this.setField('name', e)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className="form-control" id='email' value={email} onChange={(e) => this.setField('email', e)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='question'>Question</label>
                    <textarea className="form-control" id='question' value={question} onChange={(e) => this.setField('question', e)}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default ContactForm;