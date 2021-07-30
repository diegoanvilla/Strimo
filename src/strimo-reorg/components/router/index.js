import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Invitacion from "../link/confirmar";
import Login from "../login_registro/index";
import Pago from "../pago";
import Link from "../link";
import PreChat from "../chat";
import Chat from "../chat/chat.jsx";
import PrivateRoute from "./privateRoutes";
import PrivateRouteGallery from "./privateRouteGallery";
import PrivateRouteLog from "./privateRouteLog.js";
import PrivateRoutePre from "./privateRoutePre.js";
import PrivateRouteNickname from "./privateRouteNickname.js";
import PrivateRouteAdmin from "./privateRouteAdmin.js";
import PrivateRouteCreador from "./privateRouteCreador";
import Chats from "../chats";
import Explora from "../explora";
import Conciertos from "../conciertos";
import FotoPerfil from "../imagen_perfil";
import Video from "../video";
import Inicio from "../inicio";
import Galeria from "../galeria";
import CrearNFT from "../nft";
import CambiarRole from "../admin/cambiarRole.jsx";
import Pre from "../pre-log";
import Navbar from "../navbar";
import CrearStream from "../creador/crearStream.jsx";
import Ticket from "../ticket";
import Perfil from "../perfil";
import Peticiones from "../admin/peticionesConciertos";
import Nickname from "../nickname";
import SubirVideo from "../video/subir";
import Stream from "../streaming";
import { AuthProvider } from "../context/authContext";
import PopUp from "../popup/link/video";
import PreVideo from "../video/prevideo";
import "../../styles/style.css";
function Index() {
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <AuthProvider>
          <ModalSwitch />
          <Switch>
            <PrivateRouteNickname exact path="/nickname" component={Nickname} />
            <PrivateRoutePre exact path="/pre" component={Pre} />
            <PrivateRoutePre exact path="/subir-video" component={SubirVideo} />
            <PrivateRoutePre exact path="/ticket/:id" component={Ticket} />
            <PrivateRouteLog exact path="/login" component={Login} />
            <Route exact path="/">
              <Navbar tipo="inicio" />
              <Inicio />
            </Route>
            {/* <PrivateRoute path="/streaming" component={Stream} /> */}
            <PrivateRoute path="/stream" component={Stream} />
            <PrivateRouteGallery exact path="/galeria" component={Galeria} />
            <PrivateRouteGallery
              exact
              path="/create-nft"
              component={CrearNFT}
            />
            <PrivateRoute exact path="/pago/:id" component={Pago} />
            <PrivateRoute exact path="/invitacion/:id" component={Link} />
            <PrivateRoute exact path="/chats" component={Chats} />
            <PrivateRoute exact path="/confirmar/:id" component={Invitacion} />
            <PrivateRoute exact path="/chat" component={PreChat} />
            <PrivateRoute exact path="/foto-perfil" component={FotoPerfil} />
            <PrivateRoute exact path="/streaming-explora" component={Explora} />
            <PrivateRoute
              exact
              path="/streaming-conciertos"
              component={Conciertos}
            />
            <PrivateRoute exact path="/chat/:id" component={Chat} />
            <PrivateRoute exact path="/video/:id" component={Video} />
            <PrivateRouteAdmin
              exact
              path="/cambiar-role"
              component={CambiarRole}
            />
            <PrivateRouteCreador
              exact
              path="/crear-stream"
              component={CrearStream}
            />
            <PrivateRouteAdmin
              exact
              path="/peticiones-conciertos"
              component={Peticiones}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}
function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;
  console.log(background, location);
  return (
    <div>
      <Switch location={background || location}>
        <PrivateRoute path="/streaming" component={Stream} />
        <PrivateRoutePre exact path="/perfil/:pname" component={Perfil} />
        <PrivateRoute path="/v/:id" component={PreVideo} />
      </Switch>
      {background && (
        <Switch>
          <Route path="/v/:id" children={<PopUp />} />
        </Switch>
      )}
    </div>
  );
}
export default Index;
