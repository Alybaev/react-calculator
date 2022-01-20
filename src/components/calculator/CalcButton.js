import * as React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    gridColumn: (props) => `span ${props.gridColumnSpan}`
  }
});

export default function CalcButton(props) {
  const classes = useStyles(props);
  const { ...other } = props;
  return <Button className={classes.root} {...other} />;
}
