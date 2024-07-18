
const Header = (props) => {
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
  props.parts.map(propsit => {
    console.log(propsit.name)
    console.log(propsit.exercises)
    return (
      <div>
        <Part name={propsit.name} number={propsit.exercises}/>
      </div>
    )}
  )
}

const Total = (props) => {
  const summed = props.exercises.reduce((a, b) => a + b, 0)
  return (
    <p>Number of exercises {summed}</p>
  )
}

const App = () => {
  /*const course = 'Half Stack application development'
  /*const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14*/

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
    </div>
    // <Total exercises={[exercises1, exercises2, exercises3]} />
  )
}

export default App