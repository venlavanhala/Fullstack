const Hello = (props) => {
  console.log(props.name)
  return (
    <div>
      <p>Hello {props.name}!</p>
      <p>You are {props.age} years old.</p>
    </div>
  )
}

const Goodbye = () => {
  const day = new Date()
  console.log(day.toString())
  return (
    <div>
      <p>Goodbye, see you on {day.toString()}!</p>
    </div>
  )
}

const App = () => {
  const age1 = 25
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Venla" age={23}/>
      <Hello name="Vanhala" age={age1}/>
      <Goodbye />
    </>
  )
}
export default App