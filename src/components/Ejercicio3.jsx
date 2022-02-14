import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTelefono } from '../data/DatosTelefono';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
  }

  eliminar(){
    localStorage.removeItem('brand');
    localStorage.removeItem('phone_name');
    localStorage.removeItem('os');
    localStorage.removeItem('dimension');
    localStorage.removeItem('storage');
  }

  render() {
    return (
      <div id="ej3">
      <h2>Ejercicio 3</h2>
      <ul>
        <li>
          Muestra los nombres de los teléfonos almacenados en la lista de favoritos como una unordered list<b> - 0,75 puntos</b>
        </li>
        <li>
          Haz lo mismo que en el apartado anterior, salvo que ahora has de rellenar una Card para cada teléfono con los mismos datos que en el ejercicio 2, 
          pero en este caso el botón sirve para eliminar el teléfono de la lista de favoritos<b> - 1,25 puntos</b>
        </li>
      </ul>

      <Container>
          <Row>
            <Col lg={10} md={10}>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>{TitulosTelefono.field1}</th>
                      <th>{TitulosTelefono.field2}</th>
                      <th>{TitulosTelefono.field3}</th>
                      <th>{TitulosTelefono.field4}</th>
                      <th>{TitulosTelefono.field5}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DatosTelefono.map((item) => {
                      return (
                        <tr>
                          <td>{item.brand}</td>
                          <td>{item.phone_name}</td>
                          <td>{item.os}</td>
                          <td>{item.dimension}</td>
                          <td>{item.storage}</td>
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
                <Button variant="primary" type="button" onClick={this.eliminar}>Eliminar como favorito</Button>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
    );
  }
}

export default Ejercicio3;
