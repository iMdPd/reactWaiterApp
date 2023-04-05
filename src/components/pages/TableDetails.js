import { useParams } from "react-router-dom";

export const TableDetails = () => {
  const { id } = useParams();

  console.log(id);

  return <h1>Table Details</h1>;
};
