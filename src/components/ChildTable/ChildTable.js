import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const ChildTable = ({ list, removeChildHandle, checkChildHandle }) => {
  return (
    <Table size="md" className="mt-5">
      <tbody>
        {list?.map((value, index) => {
          return (
            <tr key={index}>
              <td>
                <b className={`text-style ${value.isDone && "text-disabled"}`}>
                  {value.title}
                </b>
                <Button
                  variant="danger"
                  className="button-style button-delete"
                  disabled={value.isDone}
                  onClick={() => removeChildHandle(value.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button
                  variant="success"
                  className="button-style button-check"
                  disabled={value.isDone}
                  onClick={() => checkChildHandle(value.id)}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ChildTable;
