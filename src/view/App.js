import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMessage } from '../redux/message/actions';
import { decrease, increase } from '../redux/counter/actions';
import { getTheme, switchTheme } from '../redux/theme/actions';
import { getFirms, getLaptops } from '../redux/products/actions';
import Navigation from '../components/Navigation';
import ProductList from '../components/ProductList';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.initRedux();
  }


    initRedux = () => {
      const { actions: { getTheme, getFirms, getLaptops } } = this.props;
      getTheme();
      getFirms();
      getLaptops();
    };

    render() {
      const {
        value, theme, firms, laptops,
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

      return (
        <React.Fragment>
          <div style={theme ? themeCol.darck : themeCol.light}>
            <h1 className="app_root">Test</h1>
            <p>{value}</p>
            <button type="button" onClick={() => showMessage({ text: 'fwef' })}>popka</button>
            <button type="button" onClick={() => increase(value)}>increase</button>
            <button type="button" onClick={() => decrease(value)}>decrease</button>
            <button type="button" onClick={() => switchTheme(theme)}>theme</button>
          </div>
          <Navigation firms={firms} laptops={laptops}>
            <ProductList />
          </Navigation>
        </React.Fragment>
      );
    }
}

function mapStateToProps(state) {
  return {
    value: state.counter.value,
    theme: state.theme.theme,
    firms: state.products.firms,
    laptops: state.products.laptops,
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
        getFirms,
        getLaptops,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
