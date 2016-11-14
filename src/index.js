import React from 'react';
import ReactDOM from 'react-dom';
import EditorDemo from './EditorDemo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  ReactDOM.render(
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <EditorDemo />
      </MuiThemeProvider>,
      rootNode,
  );
});
