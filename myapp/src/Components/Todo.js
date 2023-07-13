import React,{useState} from 'react';

const Todo=()=>{
    let [data,setdata]=useState([])
    let [input,setinput]=useState('')
    let [edit,setedit]=useState(null)

    function handler(){
        if(edit===null){
            setdata([...data,{id:data.length, text:input}])
            setinput('')
        }else{
            setdata((prev)=>prev.map((e)=>e.id === edit? {...e,text:input}:e))   
            setinput('')
            setedit(null)
            
        }

    }
    
    function click({target:{value}}){
        setinput(value)
    }
    // console.log(input)

    function onDeleteHandler(id){
        setdata((pre)=>pre.filter((a)=>{
            return a.id !== id
        })) 
    }

    function onEditHandler(id,text){
        setinput(text)
        setedit(id)

    }
    return(
        <div>
            <h1>TODO LIST</h1>
            <input
            onChange={click}
            type='text'
            value={input}
            />
            <button onClick={handler}>ADD</button>

            {
            data.map((val,index)=>{
                    return <div key={index}>
                        <h3>{val.text} <button onClick={()=>{onDeleteHandler(val.id)}}>Delete</button>
                        <button onClick={()=>{onEditHandler(val.id,val.text)}}>Edit</button>
                         </h3>
                    </div>
               })
            }
        </div>
    )
}

export default Todo;