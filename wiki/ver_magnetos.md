agregar al render del board view

{ this.board.magnetitos.map((magneto, index) => {
          return (<MagnetoView key={index} magneto={magneto}/>);
        })}