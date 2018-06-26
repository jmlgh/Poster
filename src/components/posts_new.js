import React, { Component } from 'react'
// reduxForm is a function very similar to the connect function
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    render() {
        // a field for each piece of state
        return (
            <form>
                <Field 
                    name="title"
                    component={}
                />
            </form>
        )
    }
}

// form here is the name of (one of) the form(s)
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew)