import React, {useEffect} from 'react'
import {AlertModalWrapper} from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {MODAL_OPEN} from '../../reducers/utils'

const AlertModal = ({show}) => {
  const dispatch = useDispatch()
  const {modalStatus, modalContents} = useSelector(state => state.utils)

  useEffect(() => {
    if (modalStatus === true) {
      setTimeout(() => {
        dispatch({
          type: MODAL_OPEN,
          data: {
            status: false,
            contents: '',
          },
        })
      }, 1200)
    }
  }, [modalStatus])

  return <AlertModalWrapper show={show}>{modalContents}</AlertModalWrapper>
}

export default AlertModal
