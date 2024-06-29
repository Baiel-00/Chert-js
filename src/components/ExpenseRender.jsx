import React from 'react'
import styled from 'styled-components'

const ExpenseRender = (props) => {
  const dey=props.date.getDate()
  const month=props.date.getMonth()+1
  const year=props.date.getFullYear()
  return (
    <Render>
      <h1>{props.titile}</h1>
      <h1>{props.price}</h1>
     <span>{dey}/{month}/{year}</span>
    </Render>
  )
}

export default ExpenseRender

const Render = styled.div`
  border: 2px solid;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(111,43,43,1) 50%, rgba(252,176,69,1) 100%);
  color: white;
  padding: 10px ;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;

        
           

`