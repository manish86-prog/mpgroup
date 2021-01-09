import React, { Component } from 'react'

export default class Ctest extends Component {
    constructor(props){
        super();
    }
    render() {        
        return (
            <div>
                testing class render {this.props.name}
            </div>
        )
    }
}
