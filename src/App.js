import React, { useEffect, useState } from "react";
//material ui
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
//components
import Form from "./components/Forms/Form";
import Posts from "./components/Posts/Posts";
//redux
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
    console.log("Algo cambio");
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.headings}>
          Memories
        </Typography>
        <img
          src="https://www.flaticon.es/svg/static/icons/svg/3930/3930204.svg"
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
