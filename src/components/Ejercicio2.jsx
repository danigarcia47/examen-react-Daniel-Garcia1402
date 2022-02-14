import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';


class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
    this.inputBrand = React.createRef();
    this.inputPhone_name = React.createRef();
    this.inputOs = React.createRef();
    this.inputDimension = React.createRef();
    this.inputStorage = React.createRef();
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item});
  };

  async componentDidMount(){
    const response = await fetch('https://api-mobilespecs.azharimm.site/{endpoint}');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  busqueda() {
    this.setState({
      phone_name: this.inputPhone_name.current.value
    });
    {/* Habria que indicar que en el endpoint ponga  /v2/search?query= {phone_name} y mandarle la info a la card*/}
  }

  favorito(){
    this.setState({marca:localStorage.getItem('brand'), modelo:localStorage.getItem('phone_name'), os:localStorage.getItem('os'), dimension:localStorage.getItem('dimension'), almacenamiento:localStorage.getItem('storage'),})
  }

  componentWillUnmount(){
    localStorage.setItem('brand', this.state.brand);
    localStorage.setItem('phone_name', this.state.phone_name);
    localStorage.setItem('os', this.state.os);
    localStorage.setItem('dimension', this.state.dimension);
    localStorage.setItem('storage', this.state.storage);
  }

  render() {
    return (
      <div id="ej2">
      <h2>Ejercicio 2</h2>
      <ul>
        <li>
          Utiliza la API REST de{' '}
          <a href="https://github.com/azharimm/phone-specs-api">Phone Specifications API</a>{' '}
          para rellenar una tabla con datos de teléfonos mediante un formulario. Ten en cuenta las siguientes indicaciones:
        </li>
        <li>El formulario será un componente que a su vez estará formado por dos componentes <b>(1 punto)</b>:</li>
          <ul>
            <li>Lista desplegable con marcas de teléfono, la cual se ha de rellenar llamando a la API (List Brands)</li>
            <li>Botón de búsqueda, que rellenará la tabla llamando a la API (List Phones) con el parámetro indicado en la lista desplegable</li>
          </ul>
        <li>La tabla tendrá los campos Marca y Modelo, y al cargar la página se rellenará con los datos de los últimos modelos (Top by Fans)<b> - 1,5 puntos</b></li>
        <li>Al hacer click sobre una fila de la tabla, se mostrará en un elemento de tipo <a href="https://react-bootstrap.github.io/components/cards/">
            Card
          </a>{' '}
          de React-Bootstrap con el detalle del modelo en concreto, con los siguientes campos separados al estilo "Kitchen Sink"<b> (1,5 puntos)</b>:
          <ul>
            <li>Imagen</li>
            <li>Marca - Modelo</li>
            <li>Sistema operativo</li>
            <li>Dimensión</li>
            <li>Almacenamiento</li>
          </ul>
          Salvo la imagen, para recuperar el resto de elementos tenéis que llamar a la API (Phone Specifications) usando el campo <i>detail</i> o <i>slug</i> 
          de las consultas de listado de elementos
          </li>
        <li>
          Añade un botón al Card que permita añadir un teléfono a una lista de favoritos, de modo que almacene su información en localStorage al ir a otra página<b> - 1 punto</b>
        </li>
      </ul>

      <p/>
      <h1>Phone Specifications API</h1>

      <p/>
      <h3>Búsqueda</h3>
      <Container>
        <Form>
          <Form.Group className="mb-3" controliD="formBasicText">
            <Form.Label>Ex: iPhone 12 Pro Max</Form.Label>
            <Form.Control type= "text" placeholder="Telefono" ref={this.inputTelefono}/>
          </Form.Group>
        </Form>
        <Button variant="primary" type="Button" onClick={this.busqueda}>Buscar</Button>
      </Container>

      <Container>
      <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  {/*Habria que indicar que el endpoint es /v2/brands/{brand_slug}/{phone_slug} */}
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr key={uuid()} onClick={() => this.changeSelected(item)}>
                        <td>{item.brand_name}</td>
                        <td>{item.phone_name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>

            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.phone_images} />
                <Card.Body>
                  <Card.Title>
                    {this.state.selectedItem.title}
                  </Card.Title>
                  <Card.Text>
                    Marca: {this.state.selectedItem.brand}
                    <p/>
                    Modelo: {this.state.selectedItem.phone_name}
                    <p/>
                    Sistema Operativo: {this.state.selectedItem.os}
                    <p/>
                    Dimension: {this.state.selectedItem.dimension}
                    <p/>
                    Almacenamiento: {this.state.selectedItem.storage}
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" type="button" onClick={this.favorito}>Marcar como favorito</Button>
              </Card>
            </Col>
          </Row>
      </Container>

    </div>
     
    );
  }
}

export default Ejercicio2;
