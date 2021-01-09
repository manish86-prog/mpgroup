import React, { Component } from 'react'
import Gallery from './Gallery';

export default class Blog extends Component {

    constructor(){
        super()
        this.state={
            //data:null,
           // active:null,
           // who:null,
            toggle:true
        }
        //console.warn("constructor")
    }

    /*componentDidUpdate(){
        console.warn("update")
        if(this.state.who==null){
            this.setState({who:"set new"})
        }
    }*/

    /*componentDidMount(){
        this.setState({data:"updated"})
        console.warn("did")
    }*/

    render() {
        //console.warn("render")
        return (
            <div>
                Hello This is blog content <br>
                </br>

                    {
                        this.state.toggle?<Gallery />:null
                    }
               

                {
                    /* <button onClick={()=>{this.setState({active:"yes"})}}>Actvate</button> */
                }
                

                <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete List</button>
            </div>
        )
    }
}