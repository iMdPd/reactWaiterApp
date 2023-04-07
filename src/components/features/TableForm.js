import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { patchTableDetails } from "../../redux/tablesRedux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export const TableForm = (param) => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(`${param.status}`);
  const [peopleAmount, setPeopleAmount] = useState(`${param.peopleAmount}`);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    `${param.maxPeopleAmount}`
  );
  const [bill, setBill] = useState(`${param.bill}`);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
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

  if (maxPeopleAmount > 10) setMaxPeopleAmount("10");
  if (maxPeopleAmount < 0) setMaxPeopleAmount("0");
  if (peopleAmount > 10) setPeopleAmount("10");
  if (peopleAmount < 0) setPeopleAmount("0");
  if (Number(peopleAmount) > Number(maxPeopleAmount))
    setPeopleAmount(maxPeopleAmount);
  if (bill < 0) setBill(0);

  const handlePeopleAmount = (e) =>
    e.target.value === "Free"
      ? setPeopleAmount("0")
      : e.target.value === "Cleaning"
      ? setPeopleAmount("0")
      : e.target.value === "Busy"
      ? setBill("0")
      : null;

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group as={Row} className="mb-3" controlId="tableStatus">
        <Form.Label column xs={4}>
          Status:
        </Form.Label>
        <Col xs={8}>
          <Form.Select
            aria-label="Select status"
            defaultValue={status}
            onChange={(e) => {
              handlePeopleAmount(e);
              setStatus(e.target.value);
            }}
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
          <Form.Label column xs={4}>
            People:
          </Form.Label>
          <Col xs={3}>
            <Form.Control
              {...register("peopleValue", { required: true, max: 10, min: 0 })}
              type="text"
              value={peopleAmount}
              onChange={(e) => setPeopleAmount(e.target.value)}
            />
          </Col>
          /
          <Col xs={3}>
            <Form.Control
              type="text"
              value={maxPeopleAmount}
              onChange={(e) => setMaxPeopleAmount(e.target.value)}
            />
          </Col>
          {errors.peopleValue && (
            <small className="d-flex justify-content-center text-danger mt-1">
              Please input number from range 1 to 10.
            </small>
          )}
        </Row>
      </Form.Group>

      {status === "Busy" && (
        <Form.Group
          as={Row}
          className="mb-3"
          style={{ maxWidth: "325px" }}
          controlId="tableBill"
        >
          <Form.Label column xs={4}>
            Bill:
          </Form.Label>
          <Col xs={4} className="d-flex align-items-center">
            <Form.Control
              {...register("bill", { required: true, min: 0 })}
              type="text"
              className="me-2"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />{" "}
            $
          </Col>
          {errors.bill && (
            <small className="d-flex justify-content-center text-danger mt-1">
              This field can't be empty.
            </small>
          )}
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
