import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {

  const [media_Name,setmedia_Name]=useState("")
  const submitMedia=()=>{
    axios.post('http://127.0.0.1:8080/AddMedia',{media_Name:media_Name}).then(()=>{
      setMediaList([medilist,{media_Name:media_Name}])
    });
    

  }
  const [newmedia,setnewmedia]=useState("")
  const deletReview=(media_Name)=>{
    axios.delete('http://127.0.0.1:8080/DeletMedia/',{
      media_Name:media_Name
    }).then(()=>{

    })
  }
  const updateReview =(movie)=>{
    axios.put("http://127.0.0.1:8080/UpdateMedia",{
      media_Name:media_Name
    });
    setnewmedia("")
  }
  const [medilist,setMediaList]=useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8080/GetMedia').then((Response)=>{
      setMediaList(Response.data)
    })
  })
  
  return (
    <div className="App">
     <h1>  Crud Application</h1> 
     <div className='form'>
     <label>Media Name</label>
     <input type="text" name='media_Name' onChange={(e)=>setmedia_Name(e.target.value)}></input>
     <button onClick={submitMedia}>Submit</button>
       
      {medilist.map((val)=>{
        return(
          <div className='card'> 
       <h1>{val.media_Name}</h1>
        <button onClick={()=>{
          deletReview(val.media_Name)
        }}>Delete</button>
        <input  type="text"  id ="updateInput" onChange={(e)=>
        {
          setnewmedia(e.target.value)
        }}></input>
        <button onClick={()=>{updateReview(val.media_Name)}}>Update </button>
        </div>
        )
      })};
     
         
     
    
     </div>
    
     
    </div>
  );
}

export default App;
