import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "46.25%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    backgroundColor: "#ffe8e2",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "20px",
    color: "#ffe8e2",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#ffe8e2",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
    fontSize: "0.7rem"
    
  },
  title: {
    padding: "0 16px",
    color: "#162b29",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  buttons: {
    color: "#162b29",
    fontWeight: "bold",
    fontFamily: "Heebo",
    display: "flex",
    fontSize: "small",
  },
  title2: {
    textAlign: "center",
    color: "#162b29",
    fontFamily: "Heebo",
    fontSize: "medium",
  },

  message: {
    textAlign: "center",
    color: "#162b29",
    fontFamily: "Heebo",
    fontSize: "medium",
    fontWeight: "bold",
  },


});
