import { useState } from 'react';

const Todo = () => {
  // for Input
  const [inputValue, setValue] = useState('');
  // functions
  const onChange = (event) => {
    setValue(event.target.value);
  };
  // -----------
  // For TODO -  Array of objects
  const todoItems = [{ name: 'Add groceries' }, { name: 'Add vegetables' }];
  const [todoList, setTodoList] = useState(todoItems);

  // functions
  // For Button

  const onSubmitSecondMethod = () => {
    let newItem = [...todoList]; // ...TodoList === ExistingItems
    // Push the value
    newItem.push({ name: inputValue });
    console.log('newItem: ', newItem, todoList);
    setTodoList(newItem);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={onSubmitSecondMethod}>Submit</button>
      {todoList.map((val, index) => {
        return <p key={index}>{val.name}</p>;
      })}
    </div>
  );
};

export default Todo;
