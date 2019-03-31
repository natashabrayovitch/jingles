import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to={`/${props.id}`} className='item'>
            <img src={props.logo} alt={`${props.name} logo`} />
            <div className='overlay'>
                <h3>{props.name} Hair Collection</h3>
            </div>
        </Link>
    );
}