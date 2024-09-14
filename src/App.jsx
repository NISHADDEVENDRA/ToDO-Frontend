import { useEffect, useState } from "react";
import ToDo from "./component/todo";
import { addTodo, getAllToDo, updateTodo ,deleteToDo} from "./utils/HandleApi";
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  

  return (
    <div className="App">
      <div className="container">
        <h1>TODO App</h1>
        <div className="top">
          <input
            type="text"
            value={text}
            placeholder="Add Todos"
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(toDoId, text, setText, setToDo, setIsUpdating)
                : () => addTodo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={()=> deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
