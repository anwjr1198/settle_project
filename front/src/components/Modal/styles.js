import styled, {keyframes} from 'styled-components'

const modal_open = keyframes`
  from {
   margin-left:-100%
  }
  to {
    margin-left:5%
}
`

const modal_fadeout = keyframes`
  from {

    opacity: 1;
  }
  to {
    display:none;
    opacity: 0;
}
`

export const AlertModalWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  text-align: center;
  z-index: 99;
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding: 15px 0px;
  position: absolute;
  border-radius: 10px;

  background: linear-gradient(
    90deg,
    rgba(180, 39, 44, 0.9) 0%,
    rgba(190, 126, 110, 0.9) 100%
  );
  opacity: ${props => (props.show === true ? 1 : 0)};
`
