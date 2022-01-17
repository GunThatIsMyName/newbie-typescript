import { ChangeEvent, FC, useState } from "react";
import Todo from "./Todo";

export type ListType = {
  task: string;
  number: number;
  id: string;
};

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [list, setList] = useState<ListType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setNumber(e.target.valueAsNumber);
    }
  };

  const addItem = (): void => {
    let tempItem: ListType = { task, number, id: task + number };
    setList((prev) => [...prev, tempItem]);
    setTask("");
    setNumber(0);
  };

  const handleDelete = (id: string): void => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            type="text "
            placeholder="how hungry are you?"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="deadlines"
            value={number}
            name="number"
            onChange={handleChange}
          />
        </div>
        <button className="input__btn" onClick={addItem}>add task</button>
      </div>

      <div className="todo-list">
        {list.map((item: ListType) => {
          return <Todo key={item.id} task={item} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default App;
