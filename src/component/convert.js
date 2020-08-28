import React,{useState,useEffect}from 'react'
import axios from 'axios'


const Convert=({language,text})=>{
  const [translated,settranslated]=useState('')
  const [debouncedText,setdebouncedText]=useState(text)
useEffect(()=>{
    const timerid=setTimeout(()=>{
      setdebouncedText(text)
    },500)

    return ()=>{
      clearTimeout(timerid)
    }
},[text])

  useEffect(()=>{
    const doTranslation=async ()=>{
const {data}= await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
        params:{
          q:debouncedText,
          target:language.value,
          key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
     
      settranslated(data.data.translations[0].translatedText)
    }
    doTranslation()
    },[language,debouncedText])
  return(
    <div>
      <h2 className="ui header">{translated}</h2>
    </div>
  )
}
export default Convert