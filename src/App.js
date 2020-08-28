import React,{useState} from 'react';
import './App.css';
import Accordion from './component/accordion'
import Search from './component/search'
import Dropdown from './component/dropdown'
import Translate from './component/translate';
import Route from './component/render'
import Header from './component/header'
const items=[
  {
    title:'what is react?',
    content:'react is a frontend framework'
  },
  {
    title:'why use react?',
    content:'because react is favourite js library'

  },
  {
    title:'how do you use react?',
    content:'we use it by creating components'
  }
]
const options=[
  {
      label:'The Color Red',
      value:'red'
  },
  {
    label:'The Color Green',
    value:'green'
},
{
  label:'A Shade of Blue',
  value:'blue'
}
]

function App() {
  const [selected, setselected] = useState(options[0])
  // const [dropDown, setdropDown] = useState(true)
  return (
    <div>
      <Header/>
      {/* <button onClick={()=>setdropDown(!dropDown)}>Toggle</button>
      {dropDown?<Dropdown selected={selected} onSelectedChange={setselected} options={options} />:''} */}
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="select a color" options={options} selected={selected} onSelectedChange={setselected}/>
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
      {/* <Translate /> */}
    </div>
  );
}

export default App;
