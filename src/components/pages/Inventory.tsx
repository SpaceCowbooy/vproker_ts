import React, {Component} from 'react';

export default class Inventory extends Component {
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
                <h3>Inventory test</h3>
            </div>
        )
    }
}