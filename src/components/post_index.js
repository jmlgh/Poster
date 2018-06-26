import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom'
import _ from 'lodash';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        // second argument is a function that will be called for each
        // element in the map function
       return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    { post.title }
                </li>
            )
       })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        )
    }
}

// since we are consuming data from application level state 
// we have to implement the mapStateToProps function
function mapStateToProps(state) {
    return { posts: state.posts };
}

// export default connect(null, { fetchPosts: fetchPosts })(PostIndex)
// identical and identical also to performing the connection using the
// mapDispatchToProps function
export default connect(mapStateToProps, { fetchPosts })(PostIndex);