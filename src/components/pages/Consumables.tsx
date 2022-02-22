import React, {Component} from 'react';

export default class Consumables extends Component {
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
                <h3>Consumables test</h3>
            </div>
        )
    }
}