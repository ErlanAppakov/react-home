import { useState } from "react";
import "./App.css";
import Heading from "./Heading.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import ListContainer from "./components/ListContainer.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

export default function App() {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const addToList = () => {
    if (value.length >= 3) {
      setList([...list, value]);
      setValue(""); 
    }
  };
  return (
    <>
      <Heading value={value} />
      <ErrorMessage error={error}></ErrorMessage>
      <ButtonsContainer
        setError={setError}
        setValue={setValue}
        addToList={addToList}
        value={value}
      />
      <ListContainer list={list} />
    </>
  );
}
