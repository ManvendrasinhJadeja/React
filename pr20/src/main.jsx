import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './redux/store.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>

)
