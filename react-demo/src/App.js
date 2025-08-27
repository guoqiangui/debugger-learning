import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import { Button } from "antd";
import { Button } from "antd/dist/antd.js";

function App() {
  const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMsg("Hahaha");
  //   }, 2000);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/guoguoguo");
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">哈喽</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>{msg}</main>
    </div>
  );
}

export default App;
