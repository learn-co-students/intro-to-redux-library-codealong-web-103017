export default function shoppingListItemReducer(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case "INCREASE_COUNT":
      console.log("State is", state);
      console.log("State will be", state.items.length + 1);
      return Object.assign({}, state, {
        items: state.items.concat(state.items.length + 1)
      });

    default:
      console.log("INIT state", state.items.length);
      return state;
  }
}
