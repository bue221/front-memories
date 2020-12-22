import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: "15px",
    margin: "30px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "1rem",
  },
  headings: {
    color: "rgba(0,183,255, 1)",
  },
}));
