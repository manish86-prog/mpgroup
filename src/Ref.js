import React, { Component } from 'react'
//import { Form } from 'react-bootstrap';
import ErrorBound from './ErrorBound' 


export default class Ref extends Component {
    constructor(){
        super();
        this.userRef = React.createRef();
    }
    editVal(){
        console.warn(this.userRef);
        this.userRef.current.focus();
        //this.userRef.current.value="3442342";
    }
    render() {
        return (
            <div>
                This is use to Ref <br/><br/><br/>

                <input name="user" ref={this.userRef} type="text" value="" onChange={()=>this.userRef}/> 
                <button onClick={()=>this.editVal()}>Check Value</button>

                <ErrorBound></ErrorBound>
                
            </div>
        )
    }
}
