import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../common/Loader';
import { vote, fetchThiccnes } from './ThiccActions';
import ThiccGraph from './ThiccGraph';

const Rating = ({ type, handleVote }) => (
  <div
    className="w-50 tc pa4 pa5-ns grow pointer"
    onClick={() => { handleVote(type); }}
    role="button"
  >
    <img src={type === "thicc" ? "/images/peach.png" : "/images/pig.png"} alt={type} className="w-100" />
    <div className="mt2 white f4">{type}</div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleThicc = this.handleThicc.bind(this);
    this.handleFat = this.handleFat.bind(this);
  }

  componentDidMount() {
    this.props.fetchThiccnes();
  }

  handleFat() {
    this.props.vote("fat");
  }

  handleThicc() {
    this.props.vote("thicc");
  }

  determineThiccness() {
    if (this.props.poll[1].value > this.props.poll[0].value) {
      return 'Trump is a THICC boi';
    } else if (this.props.poll[1].value < this.props.poll[0].value) {
      return 'Trump is fat';
    }
    return 'Trump is equally THICC and fat.';
  }

  render() {
    const { poll, loading } = this.props;
    return (
      <div>
        {loading ? <Loader /> :
        <div>
          <div className="tc">
            <div className="f2 pa2 pt4 pb4 white" style={{ backgroundColor: "#343f4f" }}>
              <img src="/images/thiccorfat_logo.png" alt="trump" className="w-70 mw6" />
            </div>
            <div className="f4 white pa4 mb4 flex items-center justify-around box-shadow" style={{ backgroundColor: "#28323f" }}>
              <div className="gold-boi w-20 w-40-ns" style={{ height: "2px" }} />
              <div className="w-40 w-20-ns">voting now open</div>
              <div className="gold-boi w-20 w-40-ns" style={{ height: "2px" }} />
            </div>
            <div className="flex flex-wrap mb6 pa2">
              <div className="mt4 mw6 mb6 center gold-boi pa2 br2 box-shadow">
                <div className="ba b--white pa3">
                  <div className="f1 bb b--white bw1 white fw6 pb4 pt3" style={{ color: "#343f4f" }}>VOTE</div>
                  <div className="video-frame mt4 center">
                    <div className="rump-zoom" />
                  </div>
                  <div className="w-100 flex mb3 mt2">
                    <Rating type="thicc" handleVote={this.handleThicc} />
                    <Rating type="fat" handleVote={this.handleFat} />
                  </div>
                </div>
              </div>
              {poll &&
              <div className="mt4 mw6 mb6 center pa2 br2 flex box-shadow" style={{ backgroundColor: "#343f4f" }}>
                <div className="ba b--white pa2 white mw9 pa4">
                  <div className="f1 bb b--white bw1 pb4 gold-text fw6 pt3">POLL RESULTS</div>
                  <div className="mt5 f4">According to a rigorously conducted scientific survey,</div>
                  <div className="f1 mt5 fw9 pb3">{this.determineThiccness()}</div>
                  <div className="mt5 center pointer flex justify-center items-center">
                    <div className="tc absolute w-100 flex-1">{poll[1].value} / {poll[0].value}</div>
                    <ThiccGraph pollData={poll} />
                  </div>
                </div>
              </div>
                }
            </div>
          </div>
          <div className="f5 pa4 bg-white w-100 tc" style={{ borderTop: ".25rem solid #a98760" }}>
            <a href="mailto:jlnelsonart@gmail.com" className="gold-text dim pointer link">Lucius made it</a>
          </div>
        </div>
        }
      </div>
    );
  }
}


const mapStateToProps = ({ ThiccReducer }) => {
  const { poll, loading } = ThiccReducer;
  return {
    poll,
    loading
  };
};

export default connect(mapStateToProps, { vote, fetchThiccnes })(App);
