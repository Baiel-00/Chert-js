import { useState } from "react"
import Header from "./Header"
import Form from "./Form"
import ExpenseRender from "./ExpenseRender"
import Chart from "./chart/Chart"

const expense=[
    // {
    //     title:"Phone",
    //     price: 10000,
    //     date: new Date("2023,5,15"),
    //     id: "1s"
    // },

    // {
    //     title:"Obed",
    //     price: 5000,
    //     date: new Date(),
    //     id: "2s"
    // },
]


const Expense=()=>{
    const[products, Setproducts]= useState(expense)
    const[form,setForm]= useState(false)
    const[filter, setFilter]= useState("2024")
   console.log(filter);

    const showFormHandlar=()=>{
        setForm(true)
    }
    const closeFromHandler=()=>{
        setForm(false)
    }

    const getDate=(data)=>{
      Setproducts([...products, data])
   
    }

    const filterDate=(e)=>{
     setFilter(e.target.value)

    }
    
    const filteredByDate = products.filter((el)=>{
        const year = el.date.getFullYear().toString()
        console.log(year);
        return year===filter
    })

    return(
        <div>
<Header onShowFormHandlar={showFormHandlar}/>
{form===true?<Form onGetData={getDate} oncloseFromHandler={closeFromHandler}/>:""}

<Chart products={filteredByDate}/>

<select onChange={filterDate} value={filter} name="" id="">
  <option value="2024">2024</option>
  <option value="2023">2023</option>
  <option value="2022">2022</option>
 
</select>
{
    filteredByDate.map((el)=>{
        return<ExpenseRender key={el.id} titile={el.title} price={el.price} date={el.date}/>
       

    })
}
        </div>
    )
}
export default Expense