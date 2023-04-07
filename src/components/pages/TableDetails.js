import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { selectTableById } from "../../redux/tablesRedux";
import { TableForm } from "../features/TableForm";

export const TableDetails = () => {
  const { id } = useParams();
  const tableData = useSelector((state) => selectTableById(state, id));

  if (!tableData) return <Navigate to="/" />;
  return (
    <>
      <h1>Table Details</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row style={{ transform: "translateY(200px)" }}>
          <Col
            style={{
              border: "1px solid #d1cdcd",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0px 0px 30px 0px rgba(209, 209, 209, 1)",
            }}
          >
            <h1 className="mb-4">Table {id}</h1>

            <TableForm {...tableData} />
          </Col>
        </Row>
      </div>
    </>
  );
};
