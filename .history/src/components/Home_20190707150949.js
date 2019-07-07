import React from "react";
import { useState, useEffect } from "react";
import * as api from "../module/api/api";
import { connect } from "react-redux";

const Home = props => {
  const [selectedTag, setSelectedTag] = useState("");
  useEffect(() => {
    props.getTags();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tags: state.state.tags,
    isLoading: state.state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTags: () => dispatch(api.getTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
