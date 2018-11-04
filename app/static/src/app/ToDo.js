import React, {Component} from 'react';

import TodoService from './../services/TodoService';

import {SECTIONS} from './../helper/conf';

import ToDoItem from './../components/ToDoItem';
import AddItem from './../components/AddItem';

export default class ToDo extends Component {
    state = {
        loading: true,
        list: [],
    };

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        TodoService.find().then(({status, json: {list}}) => {
            if (status === 200) {
                this.setState({list});
            }
        });
    }

    addItem(name) {
        const item = {name, status: 'todo'};
        TodoService.create(item).then(({status, json:item}) => {
            if (status === 200) {
                this.setState((state) => {
                    return {list: [...state.list, item]}
                })
            }
        })
    }

    changeItemStatus(id, status) {
        TodoService.update(id, {status}).then(({status, json}) => {
            if (status === 200) {
                this.setState((state) => {
                    const list = state.list;
                    const index = list.findIndex(i => i.id === id);
                    list.splice(index,1,json);
                    return {list}
                })
            }
        })
    }

    deleteItem(id) {
        TodoService.delete(id).then(({status}) => {
            if (status === 200) {
                this.setState((state) => {
                    const list = state.list;
                    const index = list.findIndex(i => i.id === id);
                    list.splice(index,1);
                    return {list}
                })
            }
        })
    }

    render() {
        const {list} = this.state;
        return (
            <div>
                <AddItem addItem={(name) => {
                    this.addItem(name)
                }}/>
                {SECTIONS.map((section) => {
                    const {title, status} = section;
                    return (
                        <div key={section.status} className={'column'}>
                            <h1>{title}</h1>
                            {list.filter((item) => item.status === status).map((item,index) => (
                                    <ToDoItem key={item.id}
                                              deleteItem = {() => this.deleteItem(item.id)}
                                              changeStatus={(status) => this.changeItemStatus(item.id,status)}
                                              item={item}/>
                                ))}
                        </div>
                    )
                })}
            </div>
        )
    }
}
