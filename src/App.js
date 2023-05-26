import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoListContext from "./contexts/TodoListContext";
import { Home, Storage } from "./pages";
import "./App.scss";

const list = [
  {
    id: 1,
    title: "Sleep",
    isDone: true,
  },
  {
    id: 2,
    title: "Go to party",
    isDone: true,
  },
  {
    id: 3,
    title: "Swim",
    isDone: true,
  },
  {
    id: 4,
    title: "Work",
    isDone: true,
  },
];

function App() {
  const [listData, setListData] = useState(list);

  return (
    <BrowserRouter>
      <TodoListContext.Provider value={[listData, setListData]}>
        <Container className="App">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Routes>
                <Route path="/user/:username" element={<Storage />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </TodoListContext.Provider>
    </BrowserRouter>
  );
}

export default App;
