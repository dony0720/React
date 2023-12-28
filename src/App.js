import { useEffect, useState } from "react";
import styles from "./Button.module.css"

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onCLick = () => {
    setValue((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("call me once");
  }, []); // 빈 배열일때는 한번만 동작한다. 
  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]); // 배열 안에 있는 state 값이 변화할 때만 동작한다. 
  useEffect(() => {
    console.log("change", counter);
  }, [counter]);
  useEffect(() => {
    console.log(`change ${keyword} & ${counter}`);
  }, [keyword,counter]); // 둘 중 한개의 값만 변화하더라도 동작한다. 


  return (
    <div>
      <input value={keyword} onChange={onChange} placeholder="Search" />
      <h1>{counter}</h1>
      <button className={styles.btn} onClick={onCLick}>click</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
