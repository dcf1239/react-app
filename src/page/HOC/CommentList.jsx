import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            //DataSource是全局范围内的数据源变量
            comments: DataSource.getComments()
        };
    }

    componentDidMount () {
        //订阅更改
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillMount () {
        //清除订阅
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange () {
        //当数据源更新时,更改组件状态
        this.setState({
            comments: DataSource.getComments()
        })
    }
    render () {
        return (
            <div>
                {
                    this.state.comments.map(comment=>(
                        <Comment comment={comment} key={comment.id} > </Comment>
                    ))
                }
            </div>
        )
    }
}
