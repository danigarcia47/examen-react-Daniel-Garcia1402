export const TitulosTelefono = {
  field1: 'Marca',
  field2: 'Modelo',
  field3: 'Sistema',
  field4: 'Dimensiones',
  field5: 'Almacenamiento',
  };
  
  export const DatosTelefono = [
    {
      Marca: localStorage.getItem('brand'),
      Modelo: localStorage.getItem('phone_name'),
      Sistema : localStorage.getItem('os'),
      Dimensiones: localStorage.getItem('dimension'),
      Almacenamiento: localStorage.getItem('storage'),
    }
  ]