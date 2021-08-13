import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import fadeories from "./images/fadeories.gif";

import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post/Post";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Fadeories
        </Typography>
        <img src={fadeories} alt="fadeories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="strech"
            spaceing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
//  light blue: #83adec

export default App;
