import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      fontFamily: "Heebo"
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 15,
    backgroundColor: "#ffe8e2",
    fontFamily: "Heebo"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    fontFamily: "Heebo"
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    color: "#e08d61",
    fontFamily: "Heebo"
  },
  buttonSubmit: {
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: "Heebo",
    backgroundColor: "#df956f",
    color: "#162b29",
    fontWeight: "bold",

  },

  buttonClear: {
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: "Heebo",
    backgroundColor: "#f8bd9e",
    color: "#162b29",
    fontWeight: "bold",
  },
  heading: {
    color: "#162b29",
    fontWeight: "bold",
    fontFamily: "Heebo"
    
  },
  note: {
    color: "#162b29",
    fontWeight: "bold",
    fontFamily: "Heebo",
    backgroundColor: "#f8bd9e",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    
  },
  notepaper: {
    backgroundColor: "#f8bd9e",
    // display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    borderRadius: 15,
    marginBottom: 10,
    

  },

  
}));
