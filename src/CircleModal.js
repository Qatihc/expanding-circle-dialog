import { useState  } from 'react';
import styled from 'styled-components';
import AddIcon from './AddIcon';

const AnimatedAddIcon = styled(AddIcon)`
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: 
    transform .5s linear,
    background-color .5s ease-in-out;
  
  ${
    ({ active }) => active ?
    `
      transform: rotate(45deg);
    ` :
    ' color: black;'
  }
`

const Modal = styled.div`
  position: absolute;
  top: ${({ iconSize }) => iconSize};
  right: 0;
  background-color: turquoise;
  transition: all 1s ease-in-out;
  ${
    ({ active, iconSize }) => active ?
    `
      clip-path: circle(100% at 50% 50%);
    ` :
    `
      clip-path: circle(0% at calc(100% - ${iconSize}) 0%);
    `
  }
`

const CircleModal = ({ className, children, size = '1rem' }) => {
  const [active, setActive] = useState(true);
  const toggleActive = () => {
    setActive(!active);
  }

  return (
    <div className={className}>
      <AnimatedAddIcon size={size} active={active} onClick={toggleActive}/>
      <Modal active={active} iconSize={size}>{children}</Modal>
    </div>
  )
}

export default styled(CircleModal)`
  position: relative;
`;