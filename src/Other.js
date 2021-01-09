import React, { Component } from 'react';
import reactDOM from 'react-dom';

export default class Other extends Component {
    render() {
        return reactDOM.createPortal(
            <h1>Prtal Componet</h1>,
            document.getElementById('other-root')
        )       
    }
}
