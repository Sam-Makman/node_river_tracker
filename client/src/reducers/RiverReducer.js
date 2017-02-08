const initialState = {
  rivers: []
};


const RiverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'addRiver':
      return Object.assign({},state, {
        rivers: [action.river].concat(state.rivers)
      });
    case 'addRivers':
    return Object.assign({},state, {
      rivers: action.rivers
    });
    default:
      return state
  }
}

export default RiverReducer;
