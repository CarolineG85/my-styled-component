import styled from "styled-components";

const Title = styled.h3`
text-align: center;
color: blue;
font-family: "Verdana", sans-serif;
`;

const Container = styled.div `
margin: 20px;
display: flex;
flex-direction: row;
width: 45%;
height: 80%;
background-color: white;
border-radius: 5px 5px 5px 5px;
`;

const Container2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
align-items: center;
`

const Img = styled.img`
height: auto;
width: 60%;
`
const P = styled.p`
color: black;
text-align: center;
font-size: 8px;
`
const Button = styled.button`
padding: 5px;
width: 30%;
margin-top: 20px;
background-color: grey;

`

function App() {
  return (
    
  <Container>
     <Img src="https://images.unsplash.com/photo-1694984121999-36d30b67f391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
    <Container2>
  <Title>Hello wilders!!!</Title>
  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil eius quisquam.</P>
  <Button>Visit us!</Button>
  </Container2>
</Container>
)}
   
















export default App;