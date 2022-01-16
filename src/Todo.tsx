import { ListType } from "./App";

type TodoType = {
  task: ListType;
  handleDelete(id: string): void;
};

const Todo = ({ task, handleDelete }: TodoType) => {
  return (
    <div className="todo__list">
      🔥Task : <h1>{task.task}</h1>
      💠Count: <p>{task.number}</p>
      <button onClick={() => handleDelete(task.id)}>❌</button>
    </div>
  );
};

export default Todo;
