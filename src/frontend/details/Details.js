
import React from 'react';
import { Redirect } from 'react-router-dom';
import getShows from '../shows';
import './Details.css';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        let show = getShows()
            .find(show => show.id === this.props.match.params.showId);
        this.setState({ show });
    }

    render() {
        let show = this.state.show;
        return (
            this.state.show ?
                <div className='details'>
                    <h1>{show.title}</h1>
                    <div className='details-content'>
                        <h3 className='details-content-synopsis'>
                            {show.synopsis}
                        </h3>
                        <div className='details-content-cover'>
                            <img src={show.image} alt={show.title} />
                        </div>
                    </div>
                </div> :
                <Redirect to='/not-found' />
        )
    }
}
