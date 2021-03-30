import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const LoaderWarpper = styled.div``

const Loading = () => {
  return (
    <div>
      <Loader type="ThreeDots" height={40} width={55} color="white" />
    </div>
  )
}

export default Loading
