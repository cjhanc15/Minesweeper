import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
  getValue() {
    const {value} = this.props;
    if (!value.isRevealed) {
      return this.props.value.isFlagged ? "🚩" : null;
    }
    if (value.isMine) {
      return "💣";
    }
    if (value.neighbour === 0) {
      return null;
    }
    return value.neighbour;
  }

  render() {
    const { value, onClick, cMenu } = this.props;
    let className =
      "cell" +
      (value.isRevealed ? "" : " hidden") +
      (value.isMine ? " is-mine" : "") +
      (value.isFlagged ? " is-flag" : "") +
      (value.isRevealed && value.isMine ? " is-mine-and-revealed" : "");

    return (
      <div className='cellBody'>
        <div onClick={onClick} className={className} onContextMenu={cMenu}>
          {this.getValue()}
        </div>
      </div>
    );
  }
}

const cellItemShape = {
    isRevealed: PropTypes.bool,
    isMine: PropTypes.bool,
    isFlagged: PropTypes.bool
}

Cell.propTypes = {
  value: PropTypes.objectOf(PropTypes.shape(cellItemShape)),
  onClick: PropTypes.func,
  cMenu: PropTypes.func
}

export default Cell