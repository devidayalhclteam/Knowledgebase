import React from "react";
import { Container } from "@material-ui/core";
import ForumCommentPage from "../Forum/ForumCommentPage";
import "./Forum.scss";
// react-router

export default function Forum() {
  return (
    <div className="forumHome">
      <Container className="forumHome-container">
        <ForumCommentPage />
      </Container>
    </div>
  );
}
