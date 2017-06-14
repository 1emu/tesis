agregar al render del tablero view

{ this.tablero.magnetitos.map((magneto, index) => {
          return (<MagnetoView key={index} magneto={magneto}/>);
        })}