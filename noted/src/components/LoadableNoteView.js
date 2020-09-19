import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableNoteView = () => Loadable({
  loader: () => import('./NoteView'),
  loading: Loading
});

export default LoadableNoteView;
