import { ShoppingCart } from 'lucide-react'

function Navbar (){
    
    return (
        <>
            <nav className="bg-blue-400 w-440 rounded-xl mx-15 mt-10 p-5 ">
                <div className="space-x-70 flex justify-end">
                    <a href="#Sobre" className="hover:bg-blue-500 hover:-translate-y-1 p-2 duration-300 rounded-xl">Sobre</a>
                    <a href="#Produtos" className="hover:bg-blue-500 hover:-translate-y-1 p-2 duration-300 rounded-xl">Produtos</a>
                    <a href="#Contato" className="hover:bg-blue-500 hover:-translate-y-1 p-2 duration-300 rounded-xl">Contato</a>
                    <ShoppingCart color="#89bff5" ClassName="w-2 h-2 border" />                                          
                </div>
            </nav>
        </>
    )
}



export default Navbar