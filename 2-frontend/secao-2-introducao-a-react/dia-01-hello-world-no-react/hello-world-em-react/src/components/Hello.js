import React from "react";

// extends é conceito de Orientação a Objetos (será visto melhor em back end)
class Hello extends React.Component {
  render() {

    // Aqui fica o JS
    const nameTeacher = 'Jensen';
    const names = ['Procópio', 'Satu', 'Will', 'Ander', 'Jensen'];

    return (
      <>
        <h1 className="title">Hello World</h1>
        <h2>Olá Turma 29</h2>
        <p>O professor da turma é o {nameTeacher}</p>
        {names.map((person) => (
        <li key={person}>Hello {person}</li>
      ))}
      </>
    )
  }
}

export default Hello;