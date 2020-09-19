const initialState =
  {
    1: {
      title: 'Things to Do',
      body: '### To Do\n- Buy a winning lottery ticket\n- Buy some vegan spam\n- Clean out from under the bed'
    },
    2: {
      title: 'Very Important Link',
      body: '[Click here](https://bit.ly/very-secret)'
    },
    3: {
      title: 'Hello World',
      body: 'Lorem ipsum'
    },
  };

export default (state = initialState, action) => {
  if (action.type === 'UPDATE_NOTE_CONTENT') {
    const { id, content } = action;

    const previous = state[id];
    const updated = { ...previous, body: content };
    const newState = { ...state, [id]: updated };

    return newState;
  }

  return state;
};
