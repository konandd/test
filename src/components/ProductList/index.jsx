import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFirms } from '../../redux/products/actions';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initRedux();
  }

    initRedux = () => {
      const { actions: { getFirms } } = this.props;
      getFirms();
    };

    render() {
      const { firms } = this.props;
      return (
        <div>
          <ul>
            {
                Array.from(firms).map(p => (
                  <li key={p}>
                    <Link to={`/${p}`}>{p}</Link>
                  </li>
                ))
            }
          </ul>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    firms: state.products.firms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getFirms,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
