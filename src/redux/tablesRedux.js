/* SELECTORS */
export const selectTables = ({ tables }) => tables;
export const selectTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const UPDATE_TABLE_DETAILS = createActionName("UPDATE_TABLES");
const REMOVE_TABLE = createActionName("REMOVE_TABLE");
const ADD_TABLE = createActionName("ADD_TABLE");

/* ACTION CREATORS */
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload });
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

export const patchTableDetails = (tableDitails, id) => {
  return () => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tableDitails),
    };

    fetch(`http://localhost:3131/api/tables/${id}`, options);
  };
};

export const deleteTable = (id) => {
  return (dispatch) => {
    const options = {
      method: "DELETE",
    };

    fetch(`http://localhost:3131/api/tables/${id}`, options).then(() =>
      dispatch(removeTable(id))
    );
  };
};

export const addTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTable),
    };

    fetch(`http://localhost:3131/api/tables`, options).then(() =>
      dispatch(addTable(newTable))
    );
  };
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];

    case UPDATE_TABLE_DETAILS:
      return [...statePart, action.payload];

    case REMOVE_TABLE:
      return [...statePart.filter((post) => post.id !== action.payload)];

    case ADD_TABLE:
      return [...statePart, action.payload];

    default:
      return statePart;
  }
};
