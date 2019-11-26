const initState = {}

export const imageReducer =( state = initState, action) => {
  switch (action.type) {
    case 'IMAGE':
      return {
        'Images':action.image
      }
    // case 'SPAN':
    //   return {
    //     'span': action.span
    //   }
    default:
      return state;
  }
}