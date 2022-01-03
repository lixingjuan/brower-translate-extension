import React, { useState } from "react";
import { Button, Input } from "antd";
import carrot from "./carrot.svg";
import { apiReqs } from "@/api";
import "./login.styl";
import "./login.css";

const reg = new RegExp(/\"\s*\"/);

const { TextArea } = Input;

function Login(props) {
  const [inputVal, setInputVal] = useState(`"中国" "hello"`);
  const [inputArr, setInputArr] = useState([]);

  const onChange = (val) => {
    // console.log(val.target.value);
    // localStorage.setItem("demo", JSON.stringify(val.target.value));
    // "你好" "hello"

    setInputVal(val.target.value);
    const res = val.target.value
      .split("\n")
      .map((it) => it.trim().split(reg))
      .map((it) => it.map((it) => it.slice(1, -1)))
      .filter((it) => it);

    setInputArr(res);
    console.log("ceeee", res);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "800px",
      }}
    >
      <TextArea
        row={8}
        value={inputVal}
        onChange={onChange}
        style={{ minHeight: "300px" }}
      />

      <h2>result</h2>

      <ul className="result">
        {inputArr.map(([zhStr, enStr]) => (
          <li>
            <span>{zhStr}</span>
            <span>{enStr}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Login;
