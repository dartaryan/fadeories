import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";

import useStyles from "./styles";
import { Link } from "react-router-dom";

const Paginate = () => {
  const classes = useStyles();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      // color="#ffe8e2"
      borderradius= "15"
      fontFamily= "Heebo"
      font= "Heebo"

      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
};

export default Paginate;
