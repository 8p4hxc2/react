import { combineReducers } from 'redux'
import rail from './rail'
import random from './random'

const testApp = combineReducers({
  rail,
  random
})

export default testApp
