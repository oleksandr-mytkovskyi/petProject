import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            likes: false,
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLikes = this.onLikes.bind(this);
    }
    onLikes() {
        this.setState(({likes}) => ({
            likes: !likes
        }));
    }

    onImportant() {
        this.setState(({important}) => ({
             important: !important
        }))
    }

    render() {
        const {label} = this.props;
        const{important, likes } = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames = `${classNames} important`;
        }
        if(likes) {
            classNames = `${classNames} like`;
        }
        return (
           
            <div className={classNames}>
                <span className='app-list-item-label' onClick={this.onLikes}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                    type='button' 
                    className='btn-star btn-sm'
                    onClick={this.onImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button 
                    type='button' 
                    className='btn-trash btn-sm'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}

