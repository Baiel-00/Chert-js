import { useState } from "react";
import styled from "styled-components";

const Form=(props)=>{
  const [titile, setTitile]=useState("")
  const[price, setPrice]=useState("")
 const[date, setDete]=useState("")

  const tileHandler=(e)=>{
  console.log(e.target.value);
  setTitile(e.target.value)
  }
  const priceHadler=(e)=>{
  setPrice(e.target.value)
  }
  const dateHandler=(e)=>{
 setDete(e.target.value)
  }

  const addHadler=()=>{
    const obj={
      title: titile,
      price: price,
      date: new Date(date ),
      id: Math.random()
    }
    props.onGetData(obj)
  }



    return(
        <FormStyle >
      <Input onChange={tileHandler} type="text" />
      <Input onChange={priceHadler} type="text" />
      <Input  onChange={dateHandler} type="date" />
    
      <BTN onClick={addHadler} >ADD</BTN>
      <BTN onClick={props.oncloseFromHandler}>CLOUCE</BTN>
      
      
        </FormStyle>
    )
}
export default Form

const FormStyle=styled.div`
border:2px solid;
width:300px;
margin:auto;
margin-top: 20px;
padding: 30px;
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(124,57,70,1) 100%);
color: white;
border-radius:20px

           

`
const Input=styled.input`
  width: 95%;
  padding: 10px;
  margin-top:10px;
  color: white;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(111,43,43,1) 50%, rgba(252,176,69,1) 100%);
  border-radius: 10px; 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  border: none
`
const BTN=styled.button`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(111,43,43,1) 50%, rgba(252,176,69,1) 100%);
color: white;
border: none;
padding: 10px;
margin: 10px;
font-size: 0,5;
font-weight: bold;
text-transform: uppercase;
border-radius: 20px;
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
 cursor: pointer;
transition: all 0.3s ease; 
; 
`