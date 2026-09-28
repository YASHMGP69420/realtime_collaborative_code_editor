// Path: frontend\src\app\App.jsx
import "./App.css"
import { Editor } from "@monaco-editor/react"
function App() {
  

  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-4"
    >
      <aside className= "h-full w-1/4 bg-amber-100 rounded-lg"
      ></aside>
      <section className="h-full w-3/4 bg-neutral-800 rounded-lg overflow-hidden"
      >
        <Editor
          height="100%"
          width="100%"
          theme="vs-dark"
          defaultLanguage="cpp"
          defaultValue="// some comment"
        />
      </section>
    </main>
  )
}

export default App
