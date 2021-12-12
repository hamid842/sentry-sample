import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    width: "95%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>404</AlertTitle>
        <strong>The page does not exist!</strong>
      </Alert>
    </div>
  );
}
