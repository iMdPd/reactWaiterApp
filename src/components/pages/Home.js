import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTables } from "../../redux/tablesRedux";
import { Table } from "../common/Table";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), [dispatch]);

  return (
    <>
      <h1>All tables</h1>
      <Table />
    </>
  );
};
