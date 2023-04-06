import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { selectTableById } from "../../redux/tablesRedux";

export const TableDetails = () => {
  const { id } = useParams();
  const tableData = useSelector((state) => selectTableById(state, id));

  console.log(tableData);

  if (!tableData) return <Navigate to="/" />;
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col
            style={{
              border: "1px solid #d1cdcd",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0px 0px 30px 0px rgba(209, 209, 209, 1)",
            }}
          >
            <h1 className="mb-4">Table {id}</h1>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="tableStatus">
                <Form.Label column sm={4}>
                  Status:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select
                    aria-label="Select status"
                    defaultValue={tableData.status}
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
                    <Form.Control type="text" value={tableData.peopleAmount} />
                  </Col>
                  /
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      value={tableData.maxPeopleAmount}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="tableBill">
                <Form.Label column sm={4}>
                  Bill:
                </Form.Label>
                <Col sm={4} className="d-flex align-items-center">
                  <Form.Control
                    type="text"
                    className="me-2"
                    value={tableData.bill}
                  />{" "}
                  $
                </Col>
              </Form.Group>

              <Form.Group className="d-flex justify-content-center mt-4">
                <Button type="submit">Update</Button>
              </Form.Group>
            </Form>

            <Row justify="center"></Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
