import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//react router dom
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

// Vistas (Views)

import LadingPage from "./components/LandingPage/LandingPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <routes>
      {/* 1.-Ruta Principal - LadingPage */}
      <Route
          path="/"
          element={
            <>
              <LadingPage />
            </>
          }
        ></Route>
    </routes>    
  )
}

export default App
