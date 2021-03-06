import React, { useContext, useState } from "react";
import * as Backend from "../../build/index.main.mjs";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { Context } from "../../Context";

export const DeployButton = ({ ctcArgs }) => {
    const [account, , , , , setCtcInfo, , setCtc, , setCtcArgs] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const deploy = async () => {
        // Open a window showing it's loaded
        setShow(true);

        const ctc = account.deploy(Backend);

        // Contract to identify the participant on the application page.
        setCtc([ctc]);

        // give the values ​​we will give when loading the contract
        setCtcArgs(ctcArgs);

        // Convert the contract information to String and copy it later
        const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2);
        setCtcInfo([ctcInfo]);

        // Switch to the contract upload page
        history.push('/deploy');
    }

    return (
        <>
            <Button variant="primary" onClick={deploy}>Deploy</Button>
            <DeployModal show={show} />
        </>
    );
}

export const AttachButton = () => {
    const [account, , , , , , , setCtc] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const attach = async (ctcInfo) => {
       // Connect to the given contract
        const ctc = await account.attach(Backend, JSON.parse(ctcInfo));
        setCtc([ctc]);

        console.log("Attached to the contract");
        history.push("/app/Bid");
    }

    return (
        <>
            <Button onClick={handleShow}>Attach</Button>
            <AttachModal
                show={show}
                handleClose={handleClose}
                attach={attach} />
        </>
    );
}

const AttachModal = ({ show, handleClose, attach }) => {
    const handleAttach = () => {
        // contract information
        const info = document.querySelector("#ctcArea").value;
        attach(info);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Attach to Contract</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    id="ctcArea"
                    as="textarea"
                    rows="10"
                    placeholder="Paste contract info here" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAttach}>
                    Attach
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const DeployModal = ({ show }) => {
    return (
        <Modal show={show} centered className="text-center">
            <Modal.Body>
                <h2>Deploying the contract</h2>
                <Spinner animation="border" />
            </Modal.Body>
        </Modal>
    );
}