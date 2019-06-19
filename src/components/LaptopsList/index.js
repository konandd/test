import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLaptops } from '../../redux/products/actions';
import Breadcrumb from '../Breadcrumb';

class LaptopsList extends Component {
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
      const key = this.props.location.pathname.slice(1);
      return (
        <div>
          <Breadcrumb pathname={this.props.location.pathname} />
          <ul>
            {laptops[key].map(p => (
              <li key={p.id}><Link to={`/${key}/${p.id}`}>{p.name}</Link></li>))}
          </ul>
          <Link to="/">Назад</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(LaptopsList);
