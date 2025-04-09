import Editor from './editor';
import './editor.css'; // Импортируем стили

function App() {
  return (
    <div className="app">
      <h1>Мой текстовый редактор</h1>
      <Editor />
    </div>
  );
}

export default App;