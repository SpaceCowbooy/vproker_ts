import React, {Component} from 'react';

export default class Maintain extends Component {
    constructor(props : any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
    }

    render() {
        return (
            <div> 
                <h3>Maintain test</h3>
            </div>
        )
    }
}