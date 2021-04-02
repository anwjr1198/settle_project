import produce from 'immer'

export const initialState = {
  settleList: [],
}

//정산목록
export const ADD_SETTLELIST = 'ADD_SETTLELIST'
export const REMOVE_SETTLELIST = 'REMOVE_SETTLELIST'

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //정산목록
      case ADD_SETTLELIST:
        draft.settleList = draft.settleList.concat(action.data)
        break
        // case REMOVE_SETTLELIST:
        //   draft.settleList = draft.settleList.filter(
        //     v => v.id !== action.data.index
        //   )

        break

      default:
        break
    }
  })
}

export default reducer
