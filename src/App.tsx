import { Navigate, Route, Routes } from "react-router-dom"

import HomePage from "@/pages/home-page"
import BlockDetailPage from "@/pages/block-detail-page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blocks/:blockId" element={<BlockDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
