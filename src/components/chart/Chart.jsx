import React from 'react'
import ChartBar from './ChartBar'
import styled from 'styled-components'

const Chart = (props) => {
  const months=[

    {
      months:"January",
      rashod: 0,

    },
    {
      months:"February",
      rashod: 0,

    },
    {
      months:"March",
      rashod: 0,

    },
    {
      months:"April",
      rashod: 0,

    },
    {
      months:"May",
      rashod: 0,

    },
    {
      months:"June",
      rashod: 0,

    },
    {
      months:"July",
      rashod: 0,

    },
    {
      months:"August",
      rashod: 0,

    },
    {
      months:"September",
      rashod: 0,

    },
    {
      months:"October",
      rashod: 0,

    },
    {
      months:"Nodember",
      rashod: 0,

    },
    {
      months:"December",
      rashod: 0,

    },
  ]
  props.products.map((el)=>{
    const ind = el.date.getMonth()
    console.log(ind);
    months[ind].rashod = +el.price +  months[ind].rashod
    
    // months[]
  })
  return (
    <ChartStyle>
     {
      months.map((el)=>{
        return<ChartBar months={el.months} rashod={el.rashod}/>
      })
     }
    </ChartStyle>
  )
}

export default Chart

const ChartStyle=styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid;
  width: 900px;
  padding: 10px 20px;
  margin-top: 40px;
  margin: auto;
  border-radius: 30px;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(24,25,25,1) 100%);w


span{
  background: rgb(34,193,195);
background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(244,244,244,1) 100%);
}
`