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
      {props.partName} {props.numberOfExercise}
    </p>
  );
};

Part.propTypes = {
  partName: PropTypes.string.isRequired,
  numberOfExercise: PropTypes.number.isRequired,
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part
          key={`${part.partName}-${part.numberOfExercise}`}
          partName={part.partName}
          numberOfExercise={part.numberOfExercise}
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
    .map((part) => part.numberOfExercise)
    .reduce((accumulator, n) => accumulator + n, 0);
  return <p>Number of exercises {total}</p>;
};

Total.propTypes = {
  parts: PropTypes.array.isRequired,
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { partName: "Fundamentals of React", numberOfExercise: 10 },
    { partName: "Using props to pass data", numberOfExercise: 7 },
    { partName: "State of a component", numberOfExercise: 14 },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
