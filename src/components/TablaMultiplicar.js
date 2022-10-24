import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajanumero = React.createRef();

    state = {
        numeros: []
    }

  render() {
    return (
      <div>
        <h1>Tabla Multiplicar</h1>
      <form onSubmit={this.mostrarTabla}>
          <input type="number" ref={this.cajanumero} />
          <br/>
          <button>
              Mostrar tabla
          </button>
      </form>
      <ul>
        {
          this.state.numeros.map((numero, index) => {
            return (<li key={index}>{index+1} x {this.cajanumero.current.value} = {numero}</li>);
          })
        }
      </ul>
      </div>
    )
  }
}
