import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(33,106,97,255)",
  },
  heading: {
    color: "#ddd8d8",
    fontWeight: "bold",
    fontFamily: "Heebo",
  },
  lower: {
    color: "#ddd8d8",
    fontFamily: "Heebo",
    margin: "0px"
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      color: "#ddd8d8",
      fontWeight: "bold",
      fontFamily: "Heebo",
      fontSize: "2rem",
    },
    lower: {
      color: "#ddd8d8",
      fontFamily: "Heebo",
      margin: "0px",
      fontSize: "1rem",
    },
  },
}));


