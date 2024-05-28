import { useState } from 'react';

const Todo = () => {
  // for Input
  const [value, setValue] = useState('');
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
  const onSubmit = () => {
    let newItem = [];
    // Push the value
    newItem.push({ name: value });
    console.log(newItem, 'newItem'); // [{name: 'Add '}]
    // new and old both items
    setTodoList([...todoList, ...newItem]);
    // Only New Items
    // setTodoList(newItem);
  };

  const onSubmitSecondMethod = () => {
    let newItem = [...todoList];
    // Push the value
    newItem.push({ name: value });
    console.log(newItem, 'newItem'); // [{name: 'Add '}]

    setTodoList(newItem);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        value={value}
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
