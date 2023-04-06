/* SELECTORS */
export const selectTables = ({ tables }) => tables;
export const selectTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const UPDATE_TABLE_DETAILS = createActionName("UPDATE_TABLES");

/* ACTION CREATORS */
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const updateTableDitails = (payload) => ({
  type: UPDATE_TABLE_DETAILS,
  payload,
});
export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((res) => res.json())
      .then((data) => dispatch(updateTables(data)));
  };
};
export const patchTableDetails = (id, tableDitails) => {
  console.log(id, tableDitails);
  return (dispach) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tableDitails),
    };

    fetch(`http://localhost:3131/api/tables/${id}`, options).then(() =>
      dispach(updateTableDitails(tableDitails))
    );
  };
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_TABLE_DETAILS:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
};
