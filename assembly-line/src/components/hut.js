import React from 'react';

class Hut extends React.Component {

  emptyArrayBuilder(lengthOfArr) {
    const newArr = [];
    for (let i = 0; i < lengthOfArr; i += 1) {
      newArr.push('');
    };
    return newArr;
  }

  renderHorSlats(numOfSlats, typeOfSlat) {
    return this.emptyArrayBuilder(numOfSlats).map((el, index) => (
      <div
        key={`${typeOfSlat}-${index}`}
        className={`${typeOfSlat}-slat ${typeOfSlat}-slat-${index}`}
        style={{ height: `${100 / numOfSlats}%`}}
      />
    ));
  }

  renderVerSlats(numOfSlats, typeOfSlat) {
    return this.emptyArrayBuilder(numOfSlats).map((el, index) => (
      <div
        key={`${typeOfSlat}-${index}`}
        className={`${typeOfSlat}-slat ${typeOfSlat}-slat-${index}`}
        style={{ width: `${100 / numOfSlats}%`}}
      />
    ));
  }

  render() {
    return (
      <div className={`hut-${this.props.color}`}>
      <div className="hut-roof">
        <div className="roof-border">
          { this.renderHorSlats(7, 'hut-roof') }
        </div>
      </div>
      <div className="hut-body">
        { this.renderHorSlats(15, 'hut-body')}
        <div className="door">
          <div className="door-border">
            { this.renderVerSlats(5, 'hut-door') }
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Hut;