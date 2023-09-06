import React,{useState} from 'react';

const Tabs=({content})=>{
    const [val,setVal]=useState(0);
    return(
        <div>
            <ul>
               {content.map((item,idx)=>(
                <li onClick={()=>setVal(idx)} key={idx}>{item}</li>
               ))}
            </ul>
            <p>Content for {content[val]}</p>
        </div>
    )
}
export default Tabs;