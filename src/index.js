import React from 'react';
import ReactDOM from 'react-dom';
import IndexNoticias from './Componentes/Noticias/Index/IndexNoticias';
import ShowNoticia from './Componentes/Noticias/Show/ShowNoticia';
import StoreNoticia from './Componentes/Noticias/Store/StoreNoticia';
import UpdateNoticia from './Componentes/Noticias/Update/UpdateNoticia';
import DeleteNoticia from './Componentes/Noticias/Delete/DeleteNoticia';


import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/noticias"  exact={true} component={IndexNoticias} />
      <Route path="/noticia/:id"  exact={true}  component={ShowNoticia}/>
      <Route path="/noticia"  exact={true}  component={StoreNoticia}/>
      <Route path="/update/noticia/:id"  exact={true}  component={UpdateNoticia}/>
      <Route path="/delete/noticia/:id" exact={true} component={DeleteNoticia} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

