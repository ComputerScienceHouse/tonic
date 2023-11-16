import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

export default class ConfirmDropModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.modal,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleDeny = this.handleDeny.bind(this);
    }

    handleConfirm() {
        this.props.confirm();
        this.props.toggle();
    }

    handleDeny() {
        this.props.toggle();
    }
   
    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalBody>
                    Are you sure?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.handleDeny}>
                        Deny
                    </Button>
                    <Button color="success" onClick={this.handleConfirm}>
                        Confirm
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}