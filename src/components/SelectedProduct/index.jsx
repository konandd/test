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
      const { name } = this.props.match.params;
      const { id } = this.props.match.params;
      const currentLaptop = laptops[name][id];
      // eslint-disable-next-line no-console
      console.log(this.props.match.history);
      return (
        <div>
          <Breadcrumb history={this.props.history} name={name} id={id} />
          <h1>{currentLaptop.name}</h1>
          <div className="description">{currentLaptop.text}</div>
          <button type="button" onClick={this.props.history.goBack}>Back</button>
          <button type="button" onClick={() => (this.props.history.push(`/${name}/${+id + 1}`))}>GG</button>
          <Link to={`/${name}/${+id + 1}`}>Next</Link>
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
