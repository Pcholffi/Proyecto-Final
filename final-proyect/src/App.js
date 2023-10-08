import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Headers/index';
=======
import Header from './components/Headers/header';
import Album from './components/ProductsList/Album';
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
import Footer from './components/Footers/footer';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound/index';
import Contenido from './pages/Empresa/Contenido';
import Crear from './pages/Create';
import Results from './pages/Results';
import Login from './pages/Login'

const App = () => {
<<<<<<< HEAD
  //const products = []; // ojala traiga los productos de la api
=======
  const products = []; // ojala traiga los productos de la api
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
  
  //const cart = [];
  //const setCart = () => {};

  return (
    <>
      <Header />
      <Switch>
        <Route path="/empresa" component= {Contenido} />
        <Route exact path="/" component={Main} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/editar/:id" component={Edit} />
        <Route path="/crear" component={Crear} />
<<<<<<< HEAD
        <Route path="/results/buscar" component={Results} />
        <Route path="/login" component={Login} />
=======
        <Route path="/buscar" component={Results} />
        <Route path="/login" component={Login} />
        <Route path="/album" render={() => <Album products={products} />} />
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
