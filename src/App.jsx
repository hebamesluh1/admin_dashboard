import Router from "./routes";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import './theme/dark.scss'

function App() {
   const { darkMode } = useContext(DarkModeContext);
  return (
     <div className={darkMode ? "app dark" : "app"}>
        <Router/>
     </div>
  )
}

export default App
