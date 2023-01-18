import { Modal, Image } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const ModalBebida = () => {
  const { modal, hadleModalClick, receta, setReceta } = useBebidas();
  const mostrarIngredientes = () => {
    // como la api devuelve 15 ingredientes y cantidades y muchos estan vacios, se hace un loop para recorrerlos
    // y se van agregando a un array que se va retornando al final
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };
  return (
    <Modal
      show={modal}
      onHide={() => {
        hadleModalClick();
        setReceta({});
      }}
    >
      <Image src={receta.strDrinkThumb} alt={receta.strDrink} fluid />
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='p-3'>
          <h2>Instrucciones</h2>
          <p>{receta.strInstructions}</p>
          <h2>Ingredientes y cantidades </h2>
          <ul>{mostrarIngredientes()}</ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBebida;
