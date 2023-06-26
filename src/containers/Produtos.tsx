import Produto from '../components/Produto'

import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
  // const produtoEstaNosFavoritos = (produto: ProdutoType) => {
  //   const produtoId = produto.id
  //   const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  //   const IdsDosFavoritos = favoritos.map((f) => f.id)

  //   return IdsDosFavoritos.includes(produtoId)
  // }

  // return (
  //   <S.Produtos>
  //     {produtos.id.map((produto: ProdutoType) => (
  //       <Produto
  //         estaNosFavoritos={produtoEstaNosFavoritos(produto)}
  //         key={produto.id}
  //         produto={produto}
  //         favoritar={favoritar}
  //       />
  //     ))}
  //   </S.Produtos>
  // )
}

export default ProdutosComponent
