import { useContext } from "react";
import { useParams } from "react-router-dom";
import TodoListContext from "../../contexts/TodoListContext";
import { InputAddon, ChildTable } from "../../components";

const Storage = () => {
  let { username } = useParams();
  const contextList = useContext(TodoListContext)[0];
  const setContextList = useContext(TodoListContext)[1];

  const addChildHandle = (value) => {
    if (contextList) {
      const tempObj = [...contextList].pop();
      const newId = tempObj.id + 1;
      const newObj = { id: newId, title: value, isDone: false };
      setContextList([...contextList, newObj]);
    } else {
      const newId = 1;
      const newObj = { id: newId, title: value, isDone: false };
      setContextList([newObj]);
    }
  };

  const removeChildHandle = (id) => {
    const tempList = [...contextList];
    const filterList = tempList.filter((x) => x.id !== id);
    setContextList(filterList);
  };

  const checkChildHandle = (id) => {
    const tempList = [...contextList];
    const newList = tempList.map((value) => {
      if (value.id === id) {
        return { ...value, isDone: true };
      }
      return value;
    });
    setContextList(newList);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-5">{username}</h1>
      <InputAddon addChildHandle={addChildHandle} />
      <ChildTable
        list={contextList}
        removeChildHandle={removeChildHandle}
        checkChildHandle={checkChildHandle}
      />
    </>
  );
};

export default Storage;
