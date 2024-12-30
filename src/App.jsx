import { useEffect, useState } from 'react';
import './App.css'
import Input from './input'
import axios from 'axios';
import List from './List';


function App() {

  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState('');

  async function fetchData(url) {
    axios.get(url).then((response) => {
      setData(response.data);
    }).catch((e) => {
      console.log("Error: ", e);
    })
  }


  useEffect(() => {
    fetchData("https://fakestoreapi.com/products")
  })



  function onChangeHandler(e) {
    setTimeout(() => {
      setInputVal(e.target.value);
    }, 1000);
  }

  return (
    <>
      <div className='text-4xl font-bold flex justify-center align-center my-6 underline text-blue-600'>
        <h1>Search Bar</h1>
      </div>
      <div>
        <Input type={"text"} placeholder={" Write Something...."} onChangeHandler={onChangeHandler} />
      </div>
      <List data={data} inputVal={inputVal} />
    </>
  )
}

export default App
