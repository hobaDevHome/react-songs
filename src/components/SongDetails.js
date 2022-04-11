import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetails extends Component {
  render() {
    if (!this.props.selectedSong) {
      return <div>no selected song</div>;
    }
    return <div>{this.props.selectedSong.title}</div>;
  }
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetails);
