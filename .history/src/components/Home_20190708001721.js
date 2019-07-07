import React from "react";
import { useState, useEffect } from "react";
import * as api from "../module/api/api";
import { connect } from "react-redux";

const Home = props => {
  //   const [selectedTag, setSelectedTag] = useState("");
  useEffect(() => {
    props.getPosts();
  }, []);

  const postsList = props.isLoading ? (
    <h2>Loading...</h2>
  ) : (
    props.posts.map((post, index) => (
      <p key={index}>
        {post.id}: {post.title}
      </p>
    ))
  );

  return (
    <div>
      <h1>Posts List</h1>
      {postsList}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(api.getPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
