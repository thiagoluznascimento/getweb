import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/produtos" element={<Produtos />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App