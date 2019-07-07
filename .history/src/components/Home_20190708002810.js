import React from "react";
import { useState, useEffect } from "react";
import * as api from "../module/api/api";
import { connect } from "react-redux";

const Home = props => {
  const [selectedPosts, setSelectedPosts] = useState([]);

  useEffect(() => {
    props.getPosts();
  }, []);

  const handleClick = e => {
    const selectedId = e.target.textContent.split(":")[0];
    if (selectedPosts.includes(selectedId))
      setSelectedPosts([...selectedPosts, selectedId]);
  };

  const postsList = props.isLoading ? (
    <h2>Loading...</h2>
  ) : (
    props.posts.map((post, index) => (
      <p key={index} onClick={handleClick}>
        {post.id}: {post.title}
      </p>
    ))
  );

  return (
    <div>
      <h1>Posts List</h1>
      <h2>Selected Ids: {selectedPosts.join(", ")}</h2>
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
