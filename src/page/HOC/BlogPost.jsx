import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        }
    }

    componentDidMount () {
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillMount () {
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange () {
        this.setState({
            blogPost: DataSource.getBlogPost(props.id)
        })
    }
    render () {
        return <TextBlock text={this.state.blogPost} />
    }
}
