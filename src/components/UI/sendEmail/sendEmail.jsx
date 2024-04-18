
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sendEmail/Boostrap.css'
function Example({active}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pedido Aceptado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='footer-modal' >
          <Button className='button-footer' variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" className='button-footer' onClick={handleClose}>
            Enviar correo 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;