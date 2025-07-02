
export default ProdutoCard

function ProdutoCard({nome, preço, imagem , descricao, texto}){
    return(
    <>  
        <h1 className="bg-blue-100 hover:bg-blue-200 p-8 m-4 text-center rounded">{nome}</h1>
        <div className="text-center" style={{ width: '20rem' }}>
            <div className="card-body">
                <img src={imagem} className="w-50 rounded-4xl border-2 ml-50 border-blue-300"/>
                <p className="ml-50">{descricao}</p>
                <p className="ml-30"><strong>Preço:</strong> R$ <span ClassName="text-green-200">{preço}</span></p>
            </div>
        </div>
    </>
    )
}