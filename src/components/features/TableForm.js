import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { patchTableDetails } from "../../redux/tablesRedux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const TableForm = (param) => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(`${param.status}`);
  const [peopleAmount, setPeopleAmount] = useState(`${param.peopleAmount}`);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    `${param.maxPeopleAmount}`
  );
  const [bill, setBill] = useState(`${param.bill}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(
      patchTableDetails(param.id, {
        status,
        peopleAmount,
        maxPeopleAmount,
        bill,
      })
    );
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="tableStatus">
        <Form.Label column sm={4}>
          Status:
        </Form.Label>
        <Col sm={8}>
          <Form.Select
            aria-label="Select status"
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Free">Free</option>
            <option value="Reserved">Reserved</option>
            <option value="Busy">Busy</option>
            <option value="Cleaning">Cleaning</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group
        className="mb-3"
        style={{ maxWidth: "300px" }}
        controlId="tablePeople"
      >
        <Row className="d-flex align-items-center">
          <Form.Label column sm={4}>
            People:
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="text"
              value={peopleAmount}
              onChange={(e) => setPeopleAmount(e.target.value)}
            />
          </Col>
          /
          <Col sm={3}>
            <Form.Control
              type="text"
              value={maxPeopleAmount}
              onChange={(e) => setMaxPeopleAmount(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>

      {status === "Busy" && (
        <Form.Group as={Row} className="mb-3" controlId="tableBill">
          <Form.Label column sm={4}>
            Bill:
          </Form.Label>
          <Col sm={4} className="d-flex align-items-center">
            <Form.Control
              type="text"
              className="me-2"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />{" "}
            $
          </Col>
        </Form.Group>
      )}

      <Form.Group className="d-flex justify-content-center mt-4">
        <Button type="submit">Update</Button>
      </Form.Group>
    </Form>
  );
};

TableForm.propTypes = {
  bill: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  maxPeopleAmount: PropTypes.string.isRequired,
  peopleAmount: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
