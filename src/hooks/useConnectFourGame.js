import { useReducer } from 'react'
import {
  connectFourReducer,
  initialConnectFourState
} from '../reducers/connectFourReducer'

export default function useConnectFourGame() {
  const [state, dispatch] = useReducer(
    connectFourReducer,
    initialConnectFourState
  )
  return { state, dispatch }
}
