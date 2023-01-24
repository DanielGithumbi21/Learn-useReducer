import { useReducer } from "react"
import "./App.css"

// The reducer function for setting the action
const reducer = (state: any, action: any) => {
  if (action.type === "incremented_points") {
    return {
      points: state.points + 3
    }
  }
  throw new Error("Unknown action");

}

const App = () => {

  const [state, dispatch] = useReducer(reducer, { points: 3 })

  const onClick = () => {
    dispatch({ type: "incremented_points" })
  }
  return (
    <div className="App">
      <button onClick={onClick}>Increase Points</button>
      <p>Hello, you have {state?.points} points</p>
    </div>
  )
}

export default App
