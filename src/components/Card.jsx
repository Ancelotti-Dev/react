import { ShoppingCart } from 'lucide-react'

function ProdutoCard({nome, preço, imagem , descricao, texto}){
    return(
    <>
        <div className="border-2 shadow-xl/20 flex rounded">
            <h1 className="bg-blue-100 hover:bg-blue-200 p-8 text-center rounded">{nome}</h1>
            <div className="m-4" style={{ width: '30rem' }}>
                <div className="card-body">
                    <img src={imagem} className="w-40 rounded-4xl border-4  border-blue-300"/>
                    <p className=""><strong>Preço:</strong> R$ <span className="text-green-300"/>{preço}<spam></spam></p>
                    <p className="">{descricao}</p>
                    <button className=" p-4 bg-green-300 duration-300 hover:bg-green-400  border-2 border-green-700 rounded-2xl"> <ShoppingCart color="#0e803a" ClassName="w-2 h-2 ml-3 border" /> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>  
    </>
    )
}

export default ProdutoCard