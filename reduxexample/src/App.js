import React from 'react';
import { connect } from 'react-redux';
import ContactView from './ContactView';

import {createContact, deleteContact} from './redux/ActionCreators';

class App extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value
    }
    this.nameRef.current.value = "";
    this.emailRef.current.value = "";
    this.props.newContact(contact);
  }

  delete(email) {
    this.props.removeContact(email)
  }
  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        Name : <input type="text" ref={this.nameRef} /> <br />
        Email : <input type="text" ref={this.emailRef} /> <br />
        <button type="submit">Add Contact</button>
      </form>
      {
        this.props.contacts.map(contact => <ContactView 
          key={contact.email} 
          contact={contact} 
          deleteContact={(email) => this.delete(email)}
          />)
      }
    </div>
  }
}
// state is from redux store
// returned data is props to react component
// within react props.contacts means state.contacts of redux store
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newContact: contact => dispatch(createContact(contact)),
    removeContact: email => dispatch(deleteContact(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);