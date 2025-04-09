import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.scss'

// Находим корневой элемент
const rootElement = document.getElementById('root')

console.log('index')

// Создаем корень React для рендеринга
const root = ReactDOM.createRoot(rootElement!)

// Рендерим наше приложение
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
