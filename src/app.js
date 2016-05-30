import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
global.Perf = require('react-addons-perf');

injectTapEventPlugin();

class DialogElement extends React.Component {
  render() {
      if (!this.props.open) {
          return null;
      }
      
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.props.toggle}
      />,
    ];

      return <Dialog title="Test dialog" modal={false}  actions={actions} open={this.props.open}>Test</Dialog>
  }
}

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            open: false,
        }
    }
    
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }
    
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggle.bind(this)} >Toggle</button>
                <DialogElement open={this.state.open} toggle={this.toggle.bind(this)} />
            </div>
        )
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
}

ReactDOM.render(<App />, document.getElementById('root'));