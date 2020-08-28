import React,{useState} from 'react'

import Dropdown from './dropdown'
import Convert from './convert'

const options=[{
  label:'Africans',
  value:'af'
},
{
  label:'Arabic',
  value:'ar'
},
{
  label:'Hindi',
  value:'hi'
}]




const Translate=()=>{
  const [language,setlanguage]=useState(options[0])
  const [text,settext]=useState('')
  
  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter text</label>
      <input value={text} onChange={(e)=> settext(e.target.value)}/>
      </div>
      </div>
      <Dropdown options={options} selected={language} onSelectedChange={setlanguage} label="Select a language"/>
      <hr></hr>
  <h3 className="ui header">Output</h3>
  <Convert text={text} language={language}/>
    </div>
  )
}
export default Translate