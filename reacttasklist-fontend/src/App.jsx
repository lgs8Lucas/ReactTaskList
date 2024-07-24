import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./pages/Tasks";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories";
import PageNotFound from "./pages/PageNotFound";
import NewTask from "./pages/NewTask";

function App() {
  return (
    <div id="App">
      <h1>React Tasklist</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
