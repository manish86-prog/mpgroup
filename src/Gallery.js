import React, { Component } from 'react'

export default class Gallery extends Component {
    /*componentWillUnmount(){
        alert("List has been deleted"   )
    }*/
    render() {
        return (
            <div>
                <ul>
                    <li>name:manish</li>
                    <li>mob:543543534</li>
                    <li>email:man@gmail.com</li>
                </ul>
            </div>
        )
    }
}