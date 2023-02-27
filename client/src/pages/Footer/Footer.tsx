import React from "react";
import { Container, Box, Grid, Typography, Button, Paper, Card, CardContent, CardActions } from "@material-ui/core";
import "./Footer.scss";

export default function Footer() {
  return (
    <Grid container className="footerGrid">
      <Grid item xs={12} sm={4} md={4} className="footerGridItem">
        <Typography className="footerText">BE IN TOUCH WITH US:</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography>All Rights Reserved</Typography>
      </Grid>
    </Grid>
  );
}
