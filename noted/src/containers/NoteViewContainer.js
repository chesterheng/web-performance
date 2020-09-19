import React from 'react';
import { connect } from 'react-redux';

import LoadableNoteView from '../components/LoadableNoteView';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const note = { id, ...state.notes[id] };
  return { ...ownProps, ...note };
};

export default connect(mapStateToProps)(LoadableNoteView);
