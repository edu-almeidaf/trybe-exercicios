// UTILIZANDO O DISPATCH TRADICIONAL:

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';
import './App.css';

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCount: state.clicks,
})

class App extends Component {
  render() {
    const { countState, dispatch, clicksCount } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add))
      dispatch(clickCounter());
    }

    return (
      <div className='App'>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        
        <button
          onClick={() => dispatchAll()}
        >
          Incrementa 1
        </button>
        
        <button
          onClick={() => dispatchAll(5)}
        >
          Incrementa 5
        </button>

        <h3>Número de Cliques: {clicksCount}</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);


//UTILIZANDO O MAPDISPATCHTOPROPS COMO SEGUNDO PARÂMETRO DO CONNECT:

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { actionCreator } from './redux/actions';
// import './App.css';

// class App extends Component {
//   render() {
//     const { countState, actionCreatorProp } = this.props;
//     return (
//       <div className='App'>
//         <h1>Contador</h1>
//         <h2>{ countState }</h2>
        
//         <button
//           onClick={() => actionCreatorProp()}
//         >
//           Incrementa 1
//         </button>
        
//         <button
//           onClick={() => actionCreatorProp(5)}
//         >
//           Incrementa 5
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   countState: state.count,
// })

// const mapDispatchToProps = (dispatch) => ({
//   actionCreatorProp: (number) => dispatch(actionCreator(number)),
// })


// Forma abreviada de escrever o mapDispatchToProps:
// const mapDispatchToProps = {
//   actionCreatorProp: actionCreator,
// }
// Na forma de objeto, o dispatch não precisa ser declarado, pois ele é chamado automaticamente

// export default connect(mapStateToProps, mapDispatchToProps)(App);
