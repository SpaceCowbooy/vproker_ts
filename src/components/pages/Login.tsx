import React, {Component} from 'react';

export default class Login extends Component {
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
                <h3>Login test</h3>
            </div>
        )
    }
}