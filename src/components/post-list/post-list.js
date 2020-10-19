import React from 'react';
import { ListGroup } from 'reactstrap';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToogleLike}) => {
    const elements = posts.map((elem) => {
        const {id, ...elemProps} = elem;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...elemProps}
                    onDelete={() => onDelete(id)}
                    onToogleLike={() => onToogleLike(id)}
                    onToggleImportant={() =>  onToggleImportant(id)}
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