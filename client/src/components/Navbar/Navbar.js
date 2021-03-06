import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

import fadeories from "../../images/fadeories.gif";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

export const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Grid>
        <div className={classes.upper}>
          <div className={classes.brandContainer}>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              variant="h2"
              align="center"
            >
              Fadeories
            </Typography>
            <img
              className={classes.image}
              src={fadeories}
              alt="icon"
              height="60"
            />
          </div>
          <div>
            <h3 className={classes.lower}>
              Don't let those memories fade away
            </h3>
          </div>
        </div>
      </Grid>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.signin}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
