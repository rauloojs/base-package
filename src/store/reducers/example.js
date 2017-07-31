import { EXAMPLE } from '../actions/main'
import createReducer from './utils'


const ACTION_HANDLERS = {
  [EXAMPLE] : (state, action) => {
    return action.data
  },
}

const initialState = ''

const example = createReducer(initialState, ACTION_HANDLERS)
export default example
