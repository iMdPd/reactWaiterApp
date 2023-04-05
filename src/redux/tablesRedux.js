/* SELECTORS */
export const selectTables = ({ tables }) => tables;
export const selectTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");

/* ACTION CREATORS */
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((res) => res.json())
      .then((data) => dispatch(updateTables(data)));
  };
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
