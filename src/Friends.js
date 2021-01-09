import React,{useState,useEffect} from 'react';  //User for Hooks only for function component

const Friends = ()=>{
    const [count, setCount] = useState(100)
    
    useEffect(()=>{
        console.warn(count)
    },[count===105])
    return (
        <div>This is friend cms page Friend {count}         
        <button onClick={()=>{setCount(count+1)}}>Increamnet</button>
        </div>        
    )

}
export default Friends;
