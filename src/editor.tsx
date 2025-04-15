// Сначала установите необходимые пакеты:
// npm install lexical @lexical/react

// Файл: editor.tsx или editor.jsx

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { EditorState } from 'lexical';
import { EmojiNode } from './EmojiPlugin/EmojiNode';
import EquationsPlugin from './EquationPlugin/EquationsPlugin';
import { EquationNode } from './EquationPlugin/EquationNode';
import MarkdownShortcutPlugin from './MarkdownShortcutPlugin'

function Editor() {
  // Начальная конфигурация редактора
  const initialConfig = {
    namespace: 'MyEditor',
    theme: {
      root: 'lexical-editor',
      text: {
        bold: 'lexical-text-bold',
        italic: 'lexical-text-italic',
        underline: 'lexical-text-underline'
      },
      paragraph: 'lexical-paragraph'
    },
    nodes: [EmojiNode, EquationNode],
    onError: (error: unknown) => {
      console.error('Lexical Editor Error:', error);
    }
  };

  // Обработчик изменений в редакторе
  const onChange = (editorState: EditorState) => {
    // Сохранение состояния в JSON, если необходимо
    editorState.read(() => {
      // Здесь можно делать что-то с содержимым редактора
      // например, сохранять его в localStorage или на сервере
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-wrapper">
        {/* Основной плагин для работы с форматированным текстом */}
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Введите текст...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        {/* Плагин истории (отмена/повтор) */}
        <EquationsPlugin />
        <HistoryPlugin />
        {/* <EmojisPlugin /> */}
        <MarkdownShortcutPlugin />
        {/* Плагин для отслеживания изменений */}
        <OnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
}

export default Editor;