import React from 'react'
import styled from 'styled-components'

const ChartBar = (props) => {

const maxSena = 20000
const sena = props.rashod
const prossent = sena*100/maxSena


  return (
    <div>
      <ChartBarStyle>
        <div style={{height:prossent+"%"}} ></div>
      </ChartBarStyle>
      <span>{props.months}</span>
    </div>
  )
}

export default ChartBar

const ChartBarStyle = styled.div`
  border: 1px solid;
  width: 50px;
  height: 300px;
  border-radius: 40px ;
  display: flex;
  flex-direction: column-reverse;
  overflow:hidden;
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(250,250,250,1) 50%, rgba(252,176,69,1) 100%);

  div{
    background: rgb(241,7,7);
    background: linear-gradient(90deg, rgba(241,7,7,1) 50%, rgba(252,176,69,1) 100%);
    
  }

`