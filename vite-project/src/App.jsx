import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [counts, setCount] = useState(0);
  async function addAdvice() {
    const url = "https://api.adviceslip.com/advice";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setCount((s) => s + 1);
      });
  }
  useEffect(() => {
    addAdvice();
  }, []);

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={addAdvice}>Click Me</button>
      < Manage counts={counts} />
    </div>
  );
}

function Manage(props) {
  return(
    <p>
    you got advise <strong>{props.counts}</strong> times{" "}
  </p>
  )
  
}

export default App;
