import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuAdmin from "../../../components/menu-admin";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAdmin title="Dashboard" />

      <Container
        fixed
        maxWidth="md"
        style={{ paddingTop: 90, paddingLeft: 90 }}
      >
        A configuração inicial em itens flexíveis é min-width: auto. Isto causa
        A configuração inicial em itens flexíveis é min-width: auto. Isto causa
        A configuração inicial em itens flexíveis é min-width: auto. Isto causa
        A configuração inicial em itens flexíveis é min-width: auto. Isto causa
        um conflito de posicionamento quando os elementos filhos estão usando
        white-space: nowrap. Você pode enfrentar o problema com: um conflito de
        posicionamento quando os elementos filhos estão usando white-space:
        nowrap. Você pode enfrentar o problema com: um conflito de
        posicionamento quando os elementos filhos estão usando white-space:
        nowrap. Você pode enfrentar o problema com: um conflito de
        posicionamento quando os elementos filhos estão usando white-space:
        nowrap. Você pode enfrentar o problema com:
      </Container>
    </React.Fragment>
  );
}
