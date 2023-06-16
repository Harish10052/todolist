import './fooder.css'
function Fooder(list){
    


return(
    
    <div>
        <h1 className="checklist">finished list</h1>
        
<table className='border1'>
    <tr>
        <th>Check box</th>
        <th>Data</th>
        
    </tr>
    {list.list.map(( obj)=>{
       
        return <tr>
            <th><input type='checkbox' onClick={()=>{list.checked(obj.index)}}/></th>
            <th>{obj.name}</th>
            
        </tr>
    })}
</table>

    </div>
);
        }
        export default Fooder;