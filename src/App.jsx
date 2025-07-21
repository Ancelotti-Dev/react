import { ShoppingCart } from 'lucide-react'
import ProdutoCard from './components/Card'
import Navbar from './components/NavBar'
import About from './components/about'
import { useState } from 'react'


import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <About id="Sobre"/>
      <h1 id="Produtos" className="bg-blue-300  w-150 p-8 m-4 text-center rounded">
        Notebook
      </h1>
      <div className="grid grid-cols-3 m-4 gap-6">
        <div className="col-start  ">
          <ProdutoCard
            nome="Nootbook Asus"
            preço="2.400,40"
            imagem="https://images.unsplash.com/photo-1705508216613-be1715a31212?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            descricao="Notebook Asus de alta performance."
          />
        </div>
        <div className="col-center-2   ">
          <ProdutoCard
            nome="Nootbook Intel"
            preço="2.400,40"
            imagem="https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGFkb3IlMjBwb3J0JUMzJUExdGlsfGVufDB8fDB8fHww"
            descricao="Notebook Intel de alta performance."
          />
        </div>
        <div className="col-end  ">
          <ProdutoCard
            nome="Notebook Positivo"
            preço="1.500,40"
            imagem="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0YWRvciUyMHBvcnQlQzMlQTF0aWx8ZW58MHx8MHx8fDA%3D"
            descricao="Notebook Positivo para tebalho"
          />
        </div>
      </div>
      <h1 className="bg-blue-300 w-150 p-8 m-4 my-8 text-center ">
        Teclados
      </h1>
      <div className="grid grid-cols-3 gap-6 mb-24 mx-24 ">

        <div className="col-start ">
          <ProdutoCard
            nome="Teclado Mecanico"
            preço="2.400,40"
            imagem="https://images.unsplash.com/photo-1630096711968-d118c17a173a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjbGFkb3N8ZW58MHx8MHx8fDA%3D"
            descricao="Teclado Mecanico com caps Variadas"
          />
        </div>
        <div className="col-center-2  ">
          <ProdutoCard
            nome="Teclado Bolinha"
            preço="2.400,40"
            imagem="https://images.unsplash.com/photo-1627827964356-a9c2f262fd64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjbGFkb3N8ZW58MHx8MHx8fDA%3D"
            descricao="Teclado Bolinha para mais conforto."
          />
        </div>
        <div className="col-end  ">
          <ProdutoCard
            nome="Teclado Apple"
            preço="1.500,40"
            imagem="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjbGFkb3N8ZW58MHx8MHx8fDA%3D"
            descricao="Teclado Apple para tebalho"
          />
        </div>
      </div>
      <h1 className="bg-blue-300 w-150 p-8 m-4 text-center ">
        Mouses
      </h1>
      <div className="grid grid-cols-3 m-4 gap-6 ">
        <div className="col-start  ">
          <ProdutoCard
            nome="Mouse Escritorio"
            preço="2.400,40"
            imagem="https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHx8MHx8fDA%3D"
            descricao="Notebook Asus de alta performance."
          />
        </div>
        <div className="col-center-2 border shadow-xl/20   ml-4">
          <ProdutoCard
            nome="Mouse logitech"
            preço="2.400,40"
            imagem="https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXNlfGVufDB8fDB8fHww"
            descricao="Notebook Intel de alta performance."
          />
        </div>
        <div className="col-end border shadow-xl/20  text-center">
          <ProdutoCard
            nome="Mouse Ryzer Preto"
            preço="1.500,40"
            imagem="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91c2V8ZW58MHx8MHx8fDA%3D"
            descricao="Notebook Positivo para tebalho"
          />
        </div>
      </div>
    </>
  )
}

export default App
