import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMessage } from '../redux/message/actions';
import { decrease, increase } from '../redux/counter/actions';
import Admin from '../components/Admin';
import Genre from '../components/Genre';
import Home from '../components/Home';
import { getTheme, switchTheme } from '../redux/theme/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
    };
    this.initRedux();
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

    initRedux = () => {
      const { actions: { getTheme } } = this.props;
      getTheme();
    };

    render() {
      const {
        value, theme,
        actions: {
          showMessage, increase, decrease, switchTheme,
        },
      } = this.props;

      const themeCol = {
        darck: {
          background: '#4d5459',
        },
        light: {
          background: '#ffffff',
        },
      };

      let Child;
      switch (this.state.route) {
        case '/admin': Child = Admin; break;
        case '/genre': Child = Genre; break;
        default: Child = Home;
      }

      return (
        <div style={theme ? themeCol.darck : themeCol.light}>
          <h1 className="app_root">Test</h1>
          <p>{value}</p>
          <button type="button" onClick={() => showMessage({ text: 'fwef' })}>popka</button>
          <button type="button" onClick={() => increase(value)}>increase</button>
          <button type="button" onClick={() => decrease(value)}>decrease</button>
          <button type="button" onClick={() => switchTheme(theme)}>theme</button>
          <div className="container">
            <h1>App</h1>
            <ul>
              <li><a href="#/admin">Adminn</a></li>
              <li><a href="#/genre">Genre</a></li>
            </ul>
            <Child />
          </div>

        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    value: state.counter.value,
    theme: state.theme.theme,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        showMessage,
        increase,
        decrease,
        switchTheme,
        getTheme,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
