import React, {Component} from 'react';

export default class Clients extends Component {
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
                <h3>Clients test</h3>
            </div>
        )
    }
}