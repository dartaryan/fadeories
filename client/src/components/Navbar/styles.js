import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "rgba(33,106,97,255)",
  },

  heading: {
    color: "#ddd8d8",
    fontWeight: "bold",
    fontFamily: "Heebo",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  lower: {
    color: "#ddd8d8",
    fontFamily: "Heebo",
    margin: "0px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
  },
  userName: {
    display: "flex",
    alignItems: "right",
    color: "#111f1e",
    fontFamily: "Heebo",
    margin: "0px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  upper: {
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
  },
  logout: {
    margin: "0px",

    borderRadius: 10,
    fontFamily: "Heebo",
    backgroundColor: "#df956f",
    color: "#162b29",
    fontWeight: "bold",
  },
  signin: {
    margin: "0px",
    borderRadius: 10,
    fontFamily: "Heebo",
    backgroundColor: "#685433",
    color: "#f4dccf",
    fontWeight: "bold",
  },
}));
