import React from "react";
import { Container, Grid } from "@material-ui/core";
import ForumCommentPage from "../Forum/ForumCommentPage";
// react-router

export default function Forum() {
  return (
    <div className="forumHome">
      <Container
        style={{
          marginTop: "30px",
          marginLeft: "50px",
          marginRight: "50px",
          maxWidth: "calc(100% - 100px)"
        }}
      >
        <ForumCommentPage />
      </Container>
    </div>
  );
}
