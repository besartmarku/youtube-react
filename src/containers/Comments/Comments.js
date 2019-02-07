import React from "react";
import { CommentsHeader } from "./CommentsHeader/CommentsHeader";
import { AddComment } from "./AddComment/AddComment";
import { Comment } from "./Comment/Comment";

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Comments;
