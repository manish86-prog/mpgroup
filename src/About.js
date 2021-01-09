import React,{Component} from 'react';
import Other from './Other';
/*const About=()=>{
    return(
        <div>About us content here dffafa f kirty</div>
    )
}*/
class About extends Component{
    constructor(){
        super();
        this.state = {
            data_arr:[],
        };
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>Hello this About us content
                <Other />
            </div>

            
        )
    }
}

export default About;