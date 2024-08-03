
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
 )
}

const Part = (props) => {
  console.log(props.number)
  return (
    <p>
      {props.name} {props.number}
    </p>
  )
}

const Content = (props) => {
  console.log(props.parts)
  const rows = props.parts.map(oneprops => {
    return (
    <Part name={oneprops.name} number={oneprops.exercises}/>
    )
  })
  return rows
}

const Total = (props) => {
  const allExercises = props.parts.map(oneprops => oneprops.exercises)
  const summed = allExercises.reduce((a, b) => a + b, 0)
  return (
    <p>Number of exercises {summed}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]}  />
    </div>
  )
}

export default App