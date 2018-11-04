import React, {Component} from 'react';

import ToDo from './ToDo';
import  './../styles.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <ToDo />
            </div>
        );
    }
}
