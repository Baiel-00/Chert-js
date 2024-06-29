import styled from "styled-components"


const Header = (props) => {
  return (
    <HeaderStyle>
      <h1> Logo </h1>
      <Button onClick={props.onShowFormHandlar}>ADD</Button>
    </HeaderStyle>
  )
}
export default Header

const HeaderStyle = styled.div`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(111,43,43,1) 50%, rgba(252,176,69,1) 100%);
 color: white;
 padding: 20px 20px;
 text-align: center;
 box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
 position: relative;

`
const Button = styled.button`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(111,43,43,1) 50%, rgba(252,176,69,1) 100%);
color: white;
border: none;
padding: 10px 30px;
font-size: 1.5em;
font-weight: bold;
text-transform: uppercase;
border-radius: 50px;
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
 cursor: pointer;
transition: all 0.3s ease; 
;

`