import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useCustomFetch from "./hooks/useCustomFetch";
import useCustomPost from "./hooks/useCustomPost";
import useCustomPut from "./hooks/useCustomPut";
import useCustomDelete from "./hooks/useCustomDelete";

import ChildTable from "./components/ChildTable";
import InputAddon from "./components/InputAddon";
import "./App.scss";

function App() {
  const url = "http://10.112.85.212:8999/tasks/";
  const [listData, setListData] = useState(null);
  const [bodyInsert, setBodyInsert] = useState(null);
  const [bodyUpdate, setBodyUpdate] = useState(null);
  const [idUpdate, setIdUpdate] = useState(null);
  const [idDelete, setIdDelete] = useState(null);

  const [data, error, loading] = useCustomFetch(url);
  const [dataAdded, errorAdded, loadingAdded] = useCustomPost(url, bodyInsert);
  const [dataEdited, errorEdited, loadingEdited] = useCustomPut(
    url,
    idUpdate,
    bodyUpdate
  );
  const [dataRemoved, errorRemoved, loadingRemoved] = useCustomDelete(
    url,
    idDelete
  );

  useEffect(() => {
    if (!loading && !error) {
      setListData(data);
    }
  }, [loading, error, data]);

  useEffect(() => {
    if (!loadingAdded && !errorAdded) {
      setListData([...listData, dataAdded]);
    }
  }, [loadingAdded, errorAdded, dataAdded]);

  useEffect(() => {
    if (!loadingEdited && !errorEdited) {
      const newList = [...listData].map((value) => {
        if (value.id === idUpdate) {
          return dataEdited;
        }
        return value;
      });
      setListData(newList);
    }
  }, [dataEdited, errorEdited, loadingEdited]);

  useEffect(() => {
    if (!loadingRemoved && !errorRemoved) {
      const tempList = [...listData];
      const newList = tempList.filter((key) => key.id !== idDelete);
      setListData(newList);
    }
  }, [errorRemoved, loadingRemoved]);

  const addChildHandle = (value) => {
    const tempObj = [...listData].pop();
    const newId = tempObj.id + 1;
    const newObj = { id: newId, title: value, isDone: false };
    setBodyInsert(newObj);
  };

  const removeChildHandle = (id) => {
    setIdDelete(id);
  };

  const checkChildHandle = (id) => {
    const tempList = [...listData];
    const tempObj = tempList.find((x) => x.id === id);
    const newObj = { ...tempObj, isDone: true };
    setIdUpdate(id);
    setBodyUpdate(newObj);
  };

  return (
    <Container className="App">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1 className="text-center mt-5 mb-5">Todo List</h1>
          <InputAddon addChildHandle={addChildHandle} />
          <ChildTable
            list={listData}
            removeChildHandle={removeChildHandle}
            checkChildHandle={checkChildHandle}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
