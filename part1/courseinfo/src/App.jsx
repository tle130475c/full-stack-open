import PropTypes from "prop-types";

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

Header.propTypes = {
  courseName: PropTypes.string.isRequired,
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

Part.propTypes = {
  name: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired,
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part
          key={`${part.name}-${part.exercises}`}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
    </>
  );
};

Content.propTypes = {
  parts: PropTypes.array.isRequired,
};

const Total = (props) => {
  const total = props.parts
    .map((part) => part.exercises)
    .reduce((accumulator, n) => accumulator + n, 0);
  return <p>Number of exercises {total}</p>;
};

Total.propTypes = {
  parts: PropTypes.array.isRequired,
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
