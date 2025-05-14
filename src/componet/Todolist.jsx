import { useState } from "react";

function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addList = () => {
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };
  const deleteList = (i) => {};

  return (
    <div>
      <input value={inputValue} onChange={inputChange}></input>
      <button onClick={addList}>등록</button>

      <ul>
        {inputList.map((item, i) => {
          return (
            <li key={i}>
              <span>{item}</span>
              <button onClick={deleteList(i)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
