import React from 'react';
import { ListGroup } from 'reactstrap';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
    const elements = posts.map((elem) => {
        const {id, ...elemProps} = elem;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...elemProps}

                // label={elem.label} 
                // important={elem.important}
                />
            </li>
        )
    });
    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;