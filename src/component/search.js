import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Search=()=>{
  const [term, setterm] = useState('')
  const [results,setresults]=useState([])
  console.log(results)
  useEffect(
   ()=>{
      const search=async ()=>{
       const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
          params:{
            action:'query',
            list:'search',
            origin:'*',
            format:'json',
            srsearch:term
          },
        });
      setresults(data.query.search)
      }  
      
      if(term && !results.length){
        search()
      }
      else{
      const timeoutId=setTimeout(()=>{
      if(term){
        search()
      }},1000)

      return ()=>{
        clearTimeout(timeoutId)
      }
    }
    },[term,results.length]);

  const renderResult = results.map(res=>{
    return (
      <div key={res.pageid} className="item">
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${res.pageid}`}>Go</a>
        </div>
        <div className="content">
          <div className="header">
              {res.title}
          </div>
          <span dangerouslySetInnerHTML={{__html:  res.snippet}}></span>
        </div>
      </div>
    )
  }) 




  
  return(
    <div>
      <div className="ui form">
      <div className="field">
      <label>Enter search term:</label>
      <input value={term} className="input" onChange={e=>setterm(e.target.value)}></input>
      </div>
      </div>
      <div className="ui celled list">
      {renderResult}
      </div>
    </div>
  )
}
export default Search