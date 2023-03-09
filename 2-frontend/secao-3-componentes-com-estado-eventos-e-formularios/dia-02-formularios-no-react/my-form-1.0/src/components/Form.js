import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      input1: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }

  render() {

    return (
      <div>
        <h1>Formulários com React</h1>
        <form className="form">
            <label htmlFor="select">
              Selecione uma opção:
              <select
                id="select"
                name="select"
                value={ this.state.select }
                onChange={ this.handleChange }
              >
                <option value="">Selecione</option>
                <option value="opcao2">Opção 1</option>
                <option value="opcao3">Opção 2</option>
                <option value="opcao4">Opção 3</option>
              </select>
            </label>
          <label htmlFor="input1">
            Input 1
            <input
              id="input1"
              type="text"
              name="input1"
              value={ this.state.input1 }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input2">
            Input 2
            <input
              id="input2"
              type="number"
              name="input2"
              value={ this.state.input2 }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="textarea">
            Textarea
            <textarea
              id="textarea"
              name="textArea"
              value={ this.state.textArea }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkbox">
            Input checkbox
            <input
              id="checkbox"
              type="checkbox"
              name="inputCheckbox"
              value={ this.state.inputCheckbox }
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Selecione um arquivo:
            <input
              type="file"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;