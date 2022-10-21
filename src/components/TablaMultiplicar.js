import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajanumero = React.createRef();

    state = {
        numeros: []
    }

   mostrarTabla = (e) => {
    e.preventDefault();

    var num = parseInt(this.cajanumero.current.value);
    console.log(num)
    const aux=[]
    for (let i=1; i<=10; i++){
        let numero = parseInt(i*num);
        aux.push(numero);
        this.setState({
            numeros: aux
        }); 
    }
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
