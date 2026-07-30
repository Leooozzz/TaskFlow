import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/signIn'
import Register from './pages/register/signUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
