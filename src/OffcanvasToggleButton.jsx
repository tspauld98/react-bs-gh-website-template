import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function OffcanvasToggleButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Button variant="primary me-3" onClick={handleShow}>
                Toggle offcanvas
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end' aria-labelledby='offcanvasExampleLabel'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div className="mt-3">
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant="secondary">
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffcanvasToggleButton
