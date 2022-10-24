import React, { Component } from 'react'

export default class extends Component {
    //variable para hacer referencia al select
    selectMultiple = React.createRef();
    //Metodo generar options
    generarOptions = () => {
        var options = [];
        for (let i=0; i<=10; i++){
            options.push(
                <option key={i}
                value={"Elemento "+i}>
                    {"Elemento "+i}
                </option>
            )
        }
        return options
    }

    //Metodo para mostrar elementos seleccionados al enviar el form
    mostrarSeleccionados = (e) => {
        e.preventDefault();
        //Tenemos acceso dentro de un select a sus options
        //y nos devuelve un array
        //Palabra reservada options
        var options = this.selectMultiple.current.options;
        var datos = "";
        //Recorremos todos los elementos del select
        for (var option of options){
            if (option.selected == true) {
                datos += option.value + ", ";
            }
        }
        //Modificamos el state
        this.setState({
            seleccionados: datos
        })
    }

    //Variable state para dibujar los elementos seleccionados
    state = {
        seleccionados: ""
    }

  render() {
    return (
      <div>
        <h1>
            Selección multiple
        </h1>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Seleccione elementos: </label><br/>
        <select ref={this.selectMultiple}
        size="10" multiple>
            {this.generarOptions()}
        </select>
        <br/>
        <button>Mostrar seleccionados</button>
        </form>
        <h1 style={{color: "blue"}}> {this.state.seleccionados} </h1>
      </div>
    )
  }
}
