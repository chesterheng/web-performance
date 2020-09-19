import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import NoteList from '../components/NoteList';

const mapStateToProps = (state) => {
  const notes = _.transform(
    state.notes,
    (result, value, id) => {
      result.push({ id, ...value });
    },
    [],
  );
  return { notes };
};

export default withRouter(connect(mapStateToProps)(NoteList));
