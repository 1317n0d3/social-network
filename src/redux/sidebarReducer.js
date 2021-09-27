let initialState = {
  friends: [
    {name: 'nikolay', id: 1},
    {name: 'sasha', id: 2},
    {name: 'ivan', id: 3},
    {name: 'pavel', id: 4},
    {name: 'oleg', id: 5}
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;