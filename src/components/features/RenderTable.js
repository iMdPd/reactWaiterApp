import { Stack, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectTables } from "../../redux/tablesRedux";
import { Loading } from "./Loading";

export const RenderTable = () => {
  const tablesData = useSelector(selectTables);

  return (
    <>
      {tablesData.length === 0 ? (
        <Loading />
      ) : (
        tablesData.map(({ id, status }) => (
          <div key={id}>
            <Stack
              style={{ marginTop: "20px", marginBottom: "20px" }}
              direction="horizontal"
              gap={3}
            >
              <h1>Table {id}</h1>
              <p className="me-auto" style={{ margin: "0" }}>
                <b>Status:</b> {status}
              </p>
              <Button variant="outline-primary" as={NavLink} to={`table/${id}`}>
                Show More...
              </Button>
            </Stack>
            <hr style={{ margin: "0" }} />
          </div>
        ))
      )}
    </>
  );
};
