import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 15,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: "#ffe8e2",
    fontFamily: "Heebo",
    font: "Heebo",
    
  },
  searchButton: {
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Heebo",
    backgroundColor: "#df956f",
    color: "#162b29",
    fontWeight: "bold",
},


  pagination: {
    borderRadius: 15,
    marginTop: '1rem',
    padding: '16px',
    fontFamily: "Heebo",
    font: "Heebo",
    backgroundColor: "#ffe8e2",
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));