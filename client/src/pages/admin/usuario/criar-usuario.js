import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import MenuAdmin from "../../../components/menu-admin";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function FormCadastrarUsuario() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAdmin title={"Cadastrar Usuario"} />

      <Container
        fixed
        maxWidth="md"
        sm={12}
        style={{ paddingTop: 90, paddingLeft: 90 }}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} sm={3}>
              <TextField
                id="name_usuario"
                label="Nome Usuario"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6} sm={3}>
              <TextField
                id="email_usuario"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} md={2} sm={2}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Tipo Usuario
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value=""
                  onChange=""
                >
                  <MenuItem value={10}>Usuario</MenuItem>
                  <MenuItem value={20}>Administrador</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6} sm={3}>
              <TextField
                id="password"
                type="password"
                label="Senha"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
