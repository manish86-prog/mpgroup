import React,{Component} from 'react';

class Contactus extends Component{

    constructor(props){
        super(props);
        
        this.state={
                        fullname:"",
                        email:"",
                        mobile:"",
                        message:"",
                        fnameError:"",
                        emailError:"",
                        mobileError:"",
                        messageError:""
                    }
    }

    handlechangeall=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    valid(){

        if(this.state.fullname===""){
            this.setState({fnameError:"Enter Name"})
        }
        else if(!this.state.email.includes("@")){
            this.setState({emailError:"Email Invalid"})
        }
        else if(this.state.mobile===""){
            this.setState({mobileError:"Enter Mobile"})
        }
        else if(this.state.message===""){
            this.setState({messageError:"Enter Message"})
        }
        else{   
                return true
        }

    }

    handlesubmit = ()=>{
        this.setState({
            fnameError:"",
            emailError:"",
            mobileError:"",
            messageError:""

        })
        if(this.valid()){
            alert("form Submit");

            console.warn(this.state);
        }

            
           
            //console.log(JSON.stringify(this.state));

            event.preventDefault();
    }



    render(){
        
        return(
            <div>
            <div>This is Contact us form</div><br/>
            <form onSubmit={this.handlesubmit}>
                <div>
                <span>Name</span><br/>
                <input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechangeall}/>
                <p style={{color:"red"}}>{this.state.fnameError}</p>
            </div>

            <div>
                <span>Email</span><br/>
                <input type="text" name="email" value={this.state.email} onChange={this.handlechangeall}/>
                <p style={{color:"red"}}>{this.state.emailError}</p>
            </div>

            <div>
                <span>Phone</span><br/>
                <input type="text" name="mobile" value={this.state.mobile} onChange={this.handlechangeall} />
                <p style={{color:"red"}}>{this.state.mobileError}</p>
            </div>

            <div>
                <span>Message</span><br/>
                <textarea name="message" cols="15" rows="5" value={this.state.message} onChange={this.handlechangeall} ></textarea>
                <p style={{color:"red"}}>{this.state.messageError}</p>
            </div>

            <div><br/>
                <input type="submit" value="Submit"/>
            </div>
            </form>
        </div>
        )
    }
}
export default Contactus;