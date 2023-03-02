import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import LinkIcon from "@mui/icons-material/Link";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@mui/material/Link";
import ForumComment from "../Forum/ForumComment";

// react-router
import { Grid, Typography } from "@material-ui/core";

export default function Forum() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={7} md={9}>
        <ForumComment />
      </Grid>
      <Grid item xs={4} md={3}>
        <Grid item xs={12} md={12}>
          {" "}
          <Card sx={{ maxWidth: "100%" }}>
            <CardContent>
              <Typography variant="body2">
                <IconButton aria-label="settings">
                  <StarBorderPurple500OutlinedIcon />
                </IconButton>
                Most-read posts
              </Typography>
              <Divider />
              <List style={{ marginLeft: "15px" }}>
                <ListItem className="forumComment-ListItem">
                  <Link component="button" variant="body2" className="forumComment-Link">
                    Please read rules before you start working on a platform
                  </Link>
                </ListItem>
                <ListItem className="forumComment-ListItem">
                  <Link component="button" variant="body2" className="forumComment-Link">
                    Vision & Strategy of Alemhelp
                  </Link>
                </ListItem>
              </List>
              <Typography variant="body2">
                <IconButton aria-label="Link Icon" style={{ rotate: "45%" }}>
                  <LinkIcon />
                </IconButton>
                Feature links
              </Typography>
              <Divider />
              <List style={{ marginLeft: "15px" }}>
                <ListItem className="forumComment-ListItem">
                  <Link component="button" variant="body2" className="forumComment-Link">
                    Alemhelp source-code on GitHub
                  </Link>
                </ListItem>
                <ListItem className="forumComment-ListItem">
                  <Link component="button" variant="body2" className="forumComment-Link">
                    Golang best-practices
                  </Link>
                </ListItem>
                <ListItem className="forumComment-ListItem">
                  <Link component="button" variant="body2" className="forumComment-Link">
                    Alerm School dashboard
                  </Link>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={12} style={{ marginTop: "50px" }}>
          <Typography variant="body2">
            <Button startIcon={<AddCircleOutlineIcon />} variant="contained" className="forumComment-AddQuestion">
              Add a question
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
