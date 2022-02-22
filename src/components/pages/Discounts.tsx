import React, {Component} from 'react';

export default class Discounts extends Component {
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
                <h3>Discounts test</h3>
            </div>
        )
    }
}