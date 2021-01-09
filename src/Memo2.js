
import React,{memo} from 'react'

const Memo2 = (props)=>{
    console.warn("Inner component"+props.data)
    return (
        <div>
            This is memo2 page
        </div>
    )
}

/*function Memo2(props) {
    console.warn("memo2")
    return (
        <div>
            This is memo2 page
        </div>
    )
}*/



export default memo(Memo2)

