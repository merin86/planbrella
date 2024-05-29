import { Route, Routes } from "react-router-dom";
import classNames from 'classnames';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from "./components/NavBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={classNames(styles.App, styles.content)}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
