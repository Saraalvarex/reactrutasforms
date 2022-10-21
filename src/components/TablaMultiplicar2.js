import React, { Component } from 'react'

export default class TablaMultiplicar2 extends Component {
    selectnumeros = React.createRef();

    state = {
        numeros: [],
    }

   mostrarSelect = () => {
    //e.preventDefault();
    var options= []
    console.log(num)
    const aux = []
    for (let i=1; i<=10; i++){
        var num = (Math.floor(Math.random() * 20)+1)
        //let numero = parseInt(i*num);
        options.push(<option>numero</option>);
    }
    return options;
    // this.setState({
    //     options: aux
    // }); 
   }

   mostrarTabla = (e) => {
    e.preventDefault();

    var num = parseInt(this.selectnumeros.current.value);
    console.log(num)
    const aux=[]
    for (let i=1; i<=10; i++){
        let numero = parseInt(i*num);
        aux.push(numero);
    }
    this.setState({
        numeros: aux
    }); 
   }

  render() {
    return (
      <div>
        <h1>Tabla Multiplicar 2</h1>
        {this.mostrarSelect()}
      <form>
          <select onChange={this.mostrarTabla} ref={this.selectnumeros}>
            {/* Aqui dibujo de option
            Relleno los datos del select */}
        {
          this.state.options.map((numero, index) => {
            return (
                <option key={index} value={numero}>
                  {numero}
                </option>)
          })
        }
          </select>
      </form>
      <ul>
        {
          this.state.numeros.map((numero, index) => {
            return (<li key={index}>{index+1} x {this.selectnumeros.current.value} = {numero}</li>);
          })
        }
      </ul>
      </div>
    )
  }
}
