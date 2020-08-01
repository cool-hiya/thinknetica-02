import React, {Component} from 'react';
import Field from '../field';

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

    submitForm(e) {
        e.preventDefault();

        const {name, email, question} = this.state;
        console.log({name, email, question});
    }

    render() {
        const {name, email, question} = this.state;

        return (
            <form className='jumbotron' onSubmit={(e) => this.submitForm(e)}>
                <Field name='name' label='Name' value={name} type='input' setValue={(name, e) => this.setField(name, e)} />
                <Field name='email' label='Email' value={email} type='input' setValue={(name, e) => this.setField(name, e)} />
                <Field name='question' label='Question' type='textarea' value={question} setValue={(name, e) => this.setField(name, e)} />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default ContactForm;