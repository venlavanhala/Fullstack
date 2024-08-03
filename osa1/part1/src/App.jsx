const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Goodbye = () => {
  return (
    <div>
      <p>Goodbye, see you!</p>
    </div>
  )
}

const App = () => {
  const age1 = 25
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Lisa" age={23}/>
      <Hello name="Pekka" age={age1}/>
      <Goodbye />
    </>
  )
}
export default App