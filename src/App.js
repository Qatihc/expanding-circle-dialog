import styled from "styled-components";
import StyledCricleModal from "./CircleModal";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
  <Container>
    <StyledCricleModal />
  </Container>
  );
}

export default App;
