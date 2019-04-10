
import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import Loading from '../common/loading/Loading';

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = { shows: [] }
    }
    componentDidMount() {
        fetch('/rest/shows')
            
        .then(response => response.json())
        .then(shows => this.setState({ shows }));
    }

    render() {
        return (
            <div className='gallery'>{
                this.state.shows.length ?
                this.state.shows.map(show => {
                    return (
                        <Cover key={show.id} id={show.id} title={show.title} />
                    );
                }) :
                <Loading />
            }
            </div>
        );
    }
}