export default function createReducer(initialState, actionsMap) {
  return (state = initialState, action) => {
    const handler = actionsMap[action.type]

    return handler ? handler(state, action) : state
  }
}
