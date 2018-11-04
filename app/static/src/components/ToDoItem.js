import React, {Component} from 'react';

import { SECTIONS } from './../helper/conf';

export default class ToDoItem extends Component {

    handleChangeStatus(status) {
        this.props.changeStatus(status);
    }
    handleDeleteItem() {
        this.props.deleteItem();
    }
    render() {
        const { item } = this.props;
        const {name} = item;
        const possibleActions = SECTIONS.filter(section => section.status !== item.status);

        return (
            <div className={'item'}>
                <h3 className={'item-name'}>{name}</h3>
                <div className={'action'} onClick={() => this.handleDeleteItem()}>x</div>
                <div>
                    <h4>move to</h4>
                    {possibleActions.map((action) => (
                        <div className={'action'} key={action.status} onClick={() => {this.handleChangeStatus(action.status)}}>{action.title}</div>
                    ))}
                </div>
            </div>
        )
    }
}