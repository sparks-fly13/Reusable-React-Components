import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} secondary>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        </div>
    );
}

export default ModalPage;