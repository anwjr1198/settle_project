import produce from 'immer'

export const initialState = {
  pageIndex: 1,
  modalStatus: false,
  modalContents: null,
}

//페이지 번호
export const CHANGE_PAGEINDEX = 'CHANGE_PAGEINDEX'
//모달 활성화
export const MODAL_OPEN = 'MODAL_OPEN'

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // 페이지
      case CHANGE_PAGEINDEX:
        draft.pageIndex = action.data
        break

      //모달
      case MODAL_OPEN:
        draft.modalStatus = action.data.status
        draft.modalContents = action.data.contents
        break

      default:
        break
    }
  })
}

export default reducer
