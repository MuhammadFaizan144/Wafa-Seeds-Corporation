import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import {ToastContainer} from 'react-toastify'
import { store } from './store/store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="toastBody"
      />
  </Provider>,
)
