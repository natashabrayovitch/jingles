
import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import getShows from '../shows';

export default class Gallery extends React.Component {
    
    componentDidMount() {
        fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }

    render() {
        return (
            <div className='gallery'>{
                getShows().map(show => {
                    return (
                        <Cover image={show.image} key={show.id}
                               id={show.id} title={show.title} />
                    );
                })
            }
            </div>
        );
    }
}