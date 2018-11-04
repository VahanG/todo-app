import React, {Component} from 'react';

export default class ToDoItem extends Component {
    state = {
        value: '',
    };

    handleAddItem() {
        this.props.addItem(this.state.value);
    }

    handleChangeName(e) {
        const value = e.target.value;
        this.setState({value});
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <input value={value} onChange={(e) => this.handleChangeName(e)}/>
                <button type='button' onClick={() => this.handleAddItem()}>Add</button>
            </div>
        )
    }
}
