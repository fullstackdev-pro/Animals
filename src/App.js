import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { API_URL } from "./config";
import { infoFetched, infoFetching } from "./redux/actions";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import AnimalInfo from "./components/AnimalInfo";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoFetching());
    fetch(API_URL + 10)
      .then((response) => response.json())
      .then((data) => {
        dispatch(infoFetched(data));
      });
  }, []);

  return (
    <Routes>
      <Route path="/animal" element={<AnimalInfo />}></Route>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  )

  
}

export default App;
