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
      <h1>Table {id}</h1>
    </>
  );
};
