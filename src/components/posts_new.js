import React, { Component } from 'react'
// reduxForm is a function very similar to the connect function
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

    renderField(field) {
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
                {field.meta.error}
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props

        // a field for each piece of state
        return (
            // label (in Fields) here are arbitrary names we choose
            // it could have been named something different
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title" 
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories" 
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button 
                    className="btn btn-primary"
                    type="submit"> Submit
                </button>
            </form>
        )
    }
}

// this function will be called automatically
// when user attempts to submit the form
function validate(values) {
    // console.log(values) -> { title:'asas', categories:'asda', content: 'sada' } 
    const errors = {}

    // validate the inputs from values
    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters"
    }

    if(!values.categories) {
        errors.categories = "Enter some categories"
    }

    if(!values.content) {
        errors.content = 'Enter some content please'
    }

    // if errors is empty the form is fine to submit
    // if errors has any properties, redux assumes the form
    // sis invalid
    return errors
}

// form here is the name of (one of) the form(s)
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew)