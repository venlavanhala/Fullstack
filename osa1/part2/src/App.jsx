
const Header = (props) => {
 // renderöi kurssin nimen
  return (
    <>
      <h1>{props.course}</h1>
    </>
 )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.number}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0]} number={props.exercises[0]}/>
      <Part name={props.parts[1]} number={props.exercises[1]}/>
      <Part name={props.parts[2]} number={props.exercises[2]}/>
  </div>
  )
}

const Total = (props) => {
  const summed = props.exercises.reduce((a, b) => a + b, 0)
  return (
    <p>Number of exercises {summed}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App