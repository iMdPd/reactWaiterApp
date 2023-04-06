import { Button, Col, Form, Row } from "react-bootstrap";

export const TableForm = ({ status, peopleAmount, maxPeopleAmount, bill }) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="tableStatus">
        <Form.Label column sm={4}>
          Status:
        </Form.Label>
        <Col sm={8}>
          <Form.Select aria-label="Select status" defaultValue={status}>
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
            <Form.Control type="text" value={peopleAmount} />
          </Col>
          /
          <Col sm={3}>
            <Form.Control type="text" value={maxPeopleAmount} />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tableBill">
        <Form.Label column sm={4}>
          Bill:
        </Form.Label>
        <Col sm={4} className="d-flex align-items-center">
          <Form.Control type="text" className="me-2" value={bill} /> $
        </Col>
      </Form.Group>

      <Form.Group className="d-flex justify-content-center mt-4">
        <Button type="submit">Update</Button>
      </Form.Group>
    </Form>
  );
};
