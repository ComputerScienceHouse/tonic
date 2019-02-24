import React, {Component} from 'react';
import {Slot} from './Slot';
import {ListGroup} from "reactstrap";

class SlotList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Slots: null
        };
    }

    componentDidMount() {
        this.renderSlotList();
    }

    renderSlotList() {
        const Slots = this.props.slots.map((slot, index) => {
            return (
                    <Slot slot={slot} background="#4eb0e3" isDrinkAdmin={this.props.isDrinkAdmin}/>
            )
        });
        this.setState({Slots});
    }

    render() {
        return (
            <ListGroup hover flush>
                {this.state.Slots}
            </ListGroup>
        )
    }
}

export default SlotList;
