import { useState } from "react";

const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  if (all === 0) {
    return (
      <>
        <Header header={"statistics"} />
        <p>No feedbacks given</p>
      </>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <Header header={"statistics"} />
          </th>
        </tr>
      </thead>
      {/* <Header header={"statistics"} /> */}
      <tbody colSpan={3}>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine
          text={"average"}
          value={Number.isFinite(average) ? average : "0"}
        />
        <StatisticLine
          text={"positive"}
          value={Number.isFinite(positive) ? positive + " %" : "0 %"}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    const newValue = good + 1;
    console.log("incremented Good, now it's: " + newValue);
    setGood(newValue);
  };

  const incrementNeutral = () => {
    const newValue = neutral + 1;
    console.log("incremented Neutral, now it's: " + newValue);
    setNeutral(newValue);
  };

  const incrementBad = () => {
    const newValue = bad + 1;
    console.log("incremented Bad, now it's: " + newValue);
    setBad(newValue);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>
              <Header header={"give feedback"} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Button onClick={incrementGood} text={"good"} />
            </td>
            <td>
              <Button onClick={incrementNeutral} text={"neutral"} />
            </td>
            <td>
              <Button onClick={incrementBad} text={"bad"} />
            </td>
          </tr>
        </tbody>
      </table>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <Header header={'give feedback'} /> */}

      {/* <Button onClick={incrementGood} text={'good'} /> */}
      {/* <Button onClick={incrementNeutral} text={'neutral'} /> */}
      {/* <Button onClick={incrementBad} text={'bad'} /> */}
    </div>
  );
};

export default App;
