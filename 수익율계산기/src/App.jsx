import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  const userInputValid = userInput.duration >= 1

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!userInputValid && <p className="center">please enter a duration great than zero.</p>}
      {userInputValid && <Results input={userInput} />}
    </>
  )
}

export default App
