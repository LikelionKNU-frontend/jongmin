import { useState } from "react";

function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([
    "멋사 세션 과제하기",
    "운동하기",
  ]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") addList();
  };
  const addList = () => {
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };

  const deleteList = (index) => {
    setInputList(
      inputList.filter((item, i) => {
        return index !== i;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={inputValue}
        onChange={inputChange}
        onKeyDown={(e) => handleEnter(e)}
      ></input>
      <button onClick={addList}>등록</button>

      <ul>
        {inputList.map((item, i) => {
          return (
            <li
              key={i}
              style={
                item === "멋사 세션 과제하기"
                  ? { color: "gray", textDecoration: "line-through" }
                  : {}
              }
            >
              {item}
              {/* <button>수정</button> */}
              <button
                onClick={() => {
                  deleteList(i);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
