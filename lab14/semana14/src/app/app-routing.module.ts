import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { ListarCategoriasComponent } from './components/listar-categorias/listar-categorias.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto', component: CrearProductoComponent },
  { path: 'crear-categoria', component: CrearCategoriaComponent },
  { path: 'listar-categorias', component: ListarCategoriasComponent },
  { path: 'categorias', redirectTo: '/listar-categorias', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
