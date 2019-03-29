import React, { Component } from 'react';


class Flat extends Component {
  handleClick = () => {
    const { index } = this.props;
    const { selectFlat } = this.props;
    if (selectFlat) {
      selectFlat(index);
    }
  }

  render () {
    const url = this.props.flat.imageUrl;
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${url})`
    };
    return (
      <div
        className={`card${this.props.selected ? ' active' : ''}`}
        style={cardStyle}
        onClick={this.handleClick}
      >
        <div className="card-category">
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}

export default Flat;
