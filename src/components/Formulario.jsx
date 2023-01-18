import { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import useCategorias from '../hooks/useCategorias';

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  const [alert, setAlert] = useState('');

  const { categorias } = useCategorias();
  const { consultarBebidas } = useBebidas();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes('')) {
      setAlert('Todos los campos son obligatorios');
    }
    setAlert('');
    consultarBebidas(busqueda);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && <Alert variant='danger'>{alert}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre de la bebida</Form.Label>
            <Form.Control
              id='nombre'
              type='text'
              placeholder='Ej. Vodka'
              name='nombre'
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoria de la bebida</Form.Label>
            <Form.Select
              id='categoria'
              name='categoria'
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            >
              <option value=''>-- Selecciona categoría --</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            type='submit'
            variant='danger'
            className='text-uppercase w-100'
          >
            Buscar bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
