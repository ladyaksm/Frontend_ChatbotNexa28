import { Routes, Route } from "react-router-dom"
import UserChat from "../pages/user/UserChat"

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/chat" element={<UserChat />} />
      <Route path="/" element={<UserChat />} />
    </Routes>
  )
}