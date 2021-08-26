import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: 15,
    backgroundColor: "#ffe8e2",
    fontFamily: "Heebo"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      fontFamily: "Heebo",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#df956f",

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    fontFamily: "Heebo",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: "Heebo",
    backgroundColor: "#df956f",
    color: "#162b29",
    fontWeight: "bold",

  },
  googleButton: {
    margin: theme.spacing(0, 0, 2),
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: "Product Sans",
    backgroundColor: "#db4a39",
    color: "white",
    // fontWeight: "bold",
    
  },
  title2: {
    textAlign: "center",
    color: "#162b29",
    fontFamily: "Heebo",
    fontSize: "22px",
    fontWeight: "bold",
  },
  switchsign:{
  margin: theme.spacing(7,3,3),
  borderRadius: 5,
  marginBottom: 10,
  fontFamily: "Heebo",
  backgroundColor: "#d3e1df",
  color: "black",
  fontSize: "10px",
}}));