/* SELECTORS */
export const selectTables = ({ tables }) => tables;
export const selectTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const UPDATE_TABLE_DETAILS = createActionName("UPDATE_TABLES");
const REMOVE_TABLE = createActionName("REMOVE_TABLE");

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
  return (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tableDitails),
    };

    fetch(`http://localhost:3131/api/tables/${id}`, options).then(() =>
      dispatch(updateTableDitails(tableDitails))
    );
  };
};

export const deleteTable = (id) => {
  const options = {
    method: "DELETE",
  };

  fetch(`http://localhost:3131/api/tables/${id}`, options);
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];

    case UPDATE_TABLE_DETAILS:
      return [...statePart, action.payload];

    case REMOVE_TABLE:
      return [...statePart.filter((post) => post.id !== action.payload)];

    default:
      return statePart;
  }
};
