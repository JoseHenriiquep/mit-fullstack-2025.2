import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});

    //Adição da Lista
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, {heading: headingInput, listInputs: []}]);
            setHeadingInput('');
        }
        console.log(todos);
    };

    //Adiciona o nome do item da lista a que pertence
    const handleListInputChange = (index, value) => {
        setListInputs({...listInputs, [index]: value})
    };

    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].listInputs.push(listInputs[index]); //Insere no array
            setTodos(newTodos);
            setListInputs({...listInputs, [index]: ''});
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1); //Remove itens
        setTodos(newTodos)
    }
    
    
    return(
        <>
            <div className="todo-container">
                <h1 className='title'>My List</h1>
                <div className='input-container'>
                    <input 
                    type="text"
                    className='heading-input'
                    placeholder='Enter heading' 
                    value={headingInput}
                    onChange={(e) => {setHeadingInput(e.target.value);}}
                    />
                    <button
                    className='add-list-button'
                    onClick={handleAddTodo}>
                        Add List    
                    </button>
                </div>
                <div className='todo_main'>
                    {todos.map((todo, index) => (
                        <div key={index} className='todo-card'>
                            <div className='heading_todo'>
                                <h3>{todo.heading}</h3>
                                <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>
                                    Delete List
                                </button>
                            </div>

                            <ul>
                                {todo.listInputs.map((item, index) => (
                                    <li key={index} className='todo_inside_list'>
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className='add_list'>
                                <input 
                                type="text" 
                                className='list-input'
                                placeholder='Add item'
                                value={listInputs[index] || ''}
                                onChange={(e) => handleListInputChange(index, e.target.value)}
                                />
                                <button className='add-list-button' onClick={() => handleAddList(index)}>Add Item</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Todo;