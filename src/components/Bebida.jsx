import { Card, Col, Button } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const Bebida = ({ bebida }) => {
  const { hadleModalClick, handleBebidaId } = useBebidas();
  return (
    <Col md={4} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
          alt={bebida.strDrink}
        />

        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            variant='warning'
            block
            className='w-100 text-uppercase'
            onClick={() => {
              hadleModalClick();
              handleBebidaId(bebida.idDrink);
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
