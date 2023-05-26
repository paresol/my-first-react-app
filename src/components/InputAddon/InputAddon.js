import { useState } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputAddon = ({ addChildHandle }) => {
  const [textValue, setTextValue] = useState("");

  const clearTextHandle = () => {
    if (!textValue) return;

    addChildHandle(textValue);
    setTextValue("");
  };

  return (
    <ButtonToolbar className="mt-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Add New Task ..."
          aria-label="Add New Task ..."
          aria-describedby="btnGroupAddon"
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
        />
        <InputGroup.Text
          id="btnGroupAddon"
          className="btn-addon"
          onClick={() => clearTextHandle()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </InputGroup.Text>
      </InputGroup>
    </ButtonToolbar>
  );
};

export default InputAddon;
