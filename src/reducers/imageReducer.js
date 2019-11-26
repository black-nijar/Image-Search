const initState = {}

export const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'IMAGE':
      return action.images

    default:
      return state;
  }
}