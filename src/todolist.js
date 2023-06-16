import  React, { useState } from 'react';
import Fooder from './fooder'
function Todolist(){
    const [todoname, settodoname]=useState("");
     const [list, setlist]=useState([{}]);

    
    const updatetodo=(event) => {
      settodoname(event.target.value.replace(/[^a-z]/gi, ''));
      
    };
    const todolist=()=>{
   
      setlist([...list, {name:todoname,ischecked:false,index:list?.length}]);
      settodoname("");
      
    }
    const remove=(value) => {
      const newdelete =list.filter((data)=>{
        return data.name !== value });
        setlist(newdelete)
     }
const check=(index)=>{
  const checked=list;
  checked[index].ischecked = !checked[index].ischecked;
  setlist([...checked]);
  
 
}

  const finished=[];
  const unfinished=[];
  for(let i=0; i<list.length; i++){
   
        if(list[i].ischecked===true){
          finished.push(list[i])
          console.log(list[i])
        }
        else{
          unfinished.push(list[i])
        }
  }
    


  

    return(
      <div className='container'> 
        
        <div className='from'>

        <div className='position'> 

      <input  className="text" type="text" placeholder='TODOLIST' value={todoname} onChange={updatetodo} id=" "/>
      <div>
        <button  className =" submit" onClick={todolist} > CLICK</button>
       
      </div>
      <table className='border'>
        <tr className='checkbox'>
          <th >Check box</th>
          <th>Data</th>
          <th>Delete</th>
        </tr>
  
 
     {unfinished.map((obj)=>{
      return <tr>
        <td><input  type="checkbox" onClick={()=>{check(obj.index)}}/></td>
        <td><h5>{obj.name}</h5></td>
        <td > <button className='button' onClick={()=>{remove(obj.name)}}>Delete</button></td>
      </tr>
       
      
      
    })}
     </table>
   

     
</div>
</div>  
<div className="fooder">
<Fooder list={finished} checked={check}/>
</div>
</div>

    );
}


export default Todolist;