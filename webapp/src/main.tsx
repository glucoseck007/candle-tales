import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import './global.scss'
import App from './App.tsx'
import SpinnerComponent from './components/common/spinner/spinner.tsx'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <SpinnerComponent />
      <CartProvider> 
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>
)
