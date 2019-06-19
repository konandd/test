import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Breadcrumb from '../Breadcrumb';
import { getLaptops } from '../../redux/products/actions';


class SelectedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initRedux();
  }

    initRedux = () => {
      const { actions: { getLaptops } } = this.props;
      getLaptops();
    };

    render() {
      const { laptops } = this.props;
      const name = this.props.location.pathname.split('/').splice(1, 1);
      const id = this.props.location.pathname.split('/').splice(2);
      const currentLaptop = laptops[name][id];
      return (
        <div>
          <Breadcrumb pathname={this.props.location.pathname} />
          <h1>{currentLaptop.name}</h1>
          <div className="description">{currentLaptop.text}</div>
          <Link to={`/${name}`}>Назад</Link>
        </div>
      );
    }
}
function mapStateToProps(state) {
  return {
    laptops: state.products.laptops,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getLaptops,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
