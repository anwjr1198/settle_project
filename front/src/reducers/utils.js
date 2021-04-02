import produce from 'immer'

export const initialState = {
  pageIndex: 1,
  modalStatus: false,
  modalContents: null,
}

//페이지 유지
export const CHANGE_PAGEINDEX = 'CHANGE_PAGEINDEX'

export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // 페이지 유지
      case CHANGE_PAGEINDEX:
        draft.pageIndex = action.data
        break

      //모달
      case MODAL_OPEN:
        draft.modalStatus = action.data.status
        draft.modalContents = action.data.contents
        break
      case MODAL_CLOSE:
        draft.modalStatus = action.data.status
        break

      default:
        break
    }
  })
}

export default reducer
