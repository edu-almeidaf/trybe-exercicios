import Card from "./components/Card";
import Hello from "./components/Hello";

function App() {
  return (
    <main className='container'>
      <Hello />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}

// React é uma biblioteca
// Serve para criar interfaces
// Ele cria componentes com JSX para criar a interface
// Todo componente no react começa com letra maiúscula para diferenciar de tag html
// Dentro do componente React temos o JSX (QUE PARECE HTML)
// .js e .jsx é a mesma coisa
// para colocar código JS no JSX usamos o { aquiVariável };
// 2 formas de criar os componentes: função e outra com classes
export default App;
