import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(33,106,97,255)",
  },
  heading: {
    color: "#F3eaea",
    fontWeight: "bold",
    fontFamily: "Heebo",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      color: "#F3eaea",
      fontWeight: "bold",
      fontFamily: "Heebo",
      fontSize: "2rem",
    },
  },
}));
