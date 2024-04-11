import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Grid from "./components/Grid";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
text-align: center;

`;


function App() {
  return (
   
   <>
      <Container>
        <Title>USUÁRIOS</Title>
      
        <Form />
        <Grid />
      
      </Container>

      

      <GlobalStyle/>
      
   </>
  );
}
     // <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
export default App;
