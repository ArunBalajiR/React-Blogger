import { useState, useEffect } from 'react';




const useFetch = (url)=> {
    
  //react hook
  const [data, setData] = useState(null);
  const[isLoading, setLoading] = useState(true);
  const[error, setErrorStatus] = useState(null);


  
  useEffect(()=>{
    //similar to dispose in flutter
    const abortCont = new AbortController();
    setTimeout(()=>{
      fetch(url,{signal : abortCont.signal})
    .then(res=> {
      if(!res.ok){
        throw Error("Could'nt fetch data..");
      }
      return res.json();
    })
    .then(data=>{
      setData(data);
      setLoading(false);
      setErrorStatus(null);
    }).catch(err=>{
      if(err.name === "AbortError"){
        console.log("Fetch Aborted");
      }else{
        setErrorStatus(err.message);
        setLoading(false);
      }
      
    })

    },1000);
    
    return ()=> abortCont.abort();
  },[url]);

  return { data, isLoading, error } 
}

export default useFetch;