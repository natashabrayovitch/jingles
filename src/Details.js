
import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import getTechnologies from './technologies-get';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            technology: {}
        };
    }

    componentDidMount() {
        let technologyId = this.props.match.params.technologyId;
        let technology = getTechnologies()
            .find((technology) => technology.id === technologyId);
        this.setState({ technology });
    }

    render() {
        if (this.state.technology === undefined) {
            return <Redirect to='/not-found' />
        } else {
             return (
                <div>
                    <h1>{this.state.technology.name} Jingles of London @ Andrew Jose</h1>
                    <h1>Look Book</h1>
                    <div>{this.state.technology.details}</div>
                    <img 
                    src={this.state.technology.logo}
                    alt={this.state.technology.name} />
                    <Link to='/'>see more</Link>
                </div>
            );
        }
    }
}
