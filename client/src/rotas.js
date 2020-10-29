import { BrowserRouter, Switch, Route } from "react-router-dom";

//admin
import Dashboard from "./pages/admin/dashboard";
import ListaProdutos from "./pages/admin/produtos";
import CadastrarProdutos from "./pages/admin/produtos/cadastro";
import EditarProdutos from "./pages/admin/produtos/editar";

import AdminUsuario from "./pages/admin/usuario";
import AdminCriarUsuario from "./pages/admin/usuario/criar-usuario";
import EditarUsuario from "./pages/admin/usuario/editar-usuario";

//client
import Home from "./pages/client/home";
import detalheProduto from "./pages/client/produtos/produto-detalhes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:idProduto" exact component={detalheProduto} />

        {/* admin rotas */}
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/admin/produtos" exact component={ListaProdutos} />
        <Route
          path="/admin/produtos/cadastrar"
          exact
          component={CadastrarProdutos}
        />
        <Route path="/admin/produtos/editar" exact component={EditarProdutos} />

        {/* admin rotas usuario */}
        <Route path="/admin/usuarios" exact component={AdminUsuario} />
        <Route
          path="/admin/usuarios/criar"
          exact
          component={AdminCriarUsuario}
        />
        <Route path="/admin/usuarios/editar" exact component={EditarUsuario} />
      </Switch>
    </BrowserRouter>
  );
}
