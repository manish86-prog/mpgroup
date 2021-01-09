import React,{useState} from 'react'
import Memo2 from './Memo2'
function Memo() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(100)
    return (
        
        <div>
            This is memo example count {count}
            <Memo2 data={data} /> 
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setData(data+1)}>Data</button>
        </div>
    )
}

export default Memo

