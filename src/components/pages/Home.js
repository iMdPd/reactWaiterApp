import { RenderTable } from "../features/RenderTable";
import { selectTables } from "../../redux/tablesRedux";
import { Loading } from "../features/Loading";
import { useSelector } from "react-redux";

export const Home = () => {
  const tablesData = useSelector(selectTables);

  return (
    <>
      <h1>All tables</h1>
      {tablesData.length === 0 ? (
        <Loading />
      ) : (
        tablesData.map((table) => <RenderTable key={table.id} {...table} />)
      )}
    </>
  );
};
