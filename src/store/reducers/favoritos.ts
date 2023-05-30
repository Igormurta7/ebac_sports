import { Produto } from '../../App'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.itens.find((p) => p.id === favorito.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== favorito.id
        )
        return
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
