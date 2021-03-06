import styled from "styled-components";
import CircleDialog from "./CircleDialog";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const TestComponent = ({ className }) => {
  return (
    <p className={className}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  )
}

const StyledTestComponent = styled(TestComponent)`
  width: 30rem;
  padding: 3rem;
`

function App() {
  return (
  <Container>
    <CircleDialog buttonPosition="bottom">
      <StyledTestComponent />
    </CircleDialog>
    <CircleDialog buttonPosition="top">
      <StyledTestComponent />
    </CircleDialog>
  </Container>
  );
}

export default App;
