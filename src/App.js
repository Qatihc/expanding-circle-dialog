import styled from "styled-components";
import CircleModal from "./CircleModal";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const A = ({ className }) => {
  return (
    <p className={className}>
    'AAAAAAAAAaAAAAAavAAAa'

    </p>
  )
}

const Ba = styled(A)`
  padding: 3rem;
`

function App() {
  return (
  <Container>
    <CircleModal>
      <Ba />
    </CircleModal>
  </Container>
  );
}

export default App;
