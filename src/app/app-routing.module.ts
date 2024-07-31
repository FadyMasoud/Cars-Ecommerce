import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductformComponent } from './productform/productform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserformComponent } from './userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PostformComponent } from './postform/postform.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ShowroomformComponent } from './showroomform/showroomform.component';
import { UserlistDashboardComponent } from './userlist-dashboard/userlist-dashboard.component';
import { PostlistDashboardComponent } from './postlist-dashboard/postlist-dashboard.component';
import { ProductlistDashboardComponent } from './productlist-dashboard/productlist-dashboard.component';
import { CategorylistDashboardComponent } from './categorylist-dashboard/categorylist-dashboard.component';
import { ShowroomlistDashboardComponent } from './showroomlist-dashboard/showroomlist-dashboard.component';
import { ShowroomdetailsComponent } from './showroomdetails/showroomdetails.component';
import { OrderlistDashboardComponent } from './orderlist-dashboard/orderlist-dashboard.component';
import { MaintenceorderlistDashboardComponent } from './maintenceorderlist-dashboard/maintenceorderlist-dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { StoreComponent } from './store/store.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './Auth gurd/auth.guard';
import { MaintenanceOrderComponent } from './maintenance-order/maintenance-order.component';




const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'userlist-dashboard',component:UserlistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'postlist-dashboard',component:PostlistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'productlist-dashboard',component:ProductlistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'categorylist-dashboard',component:CategorylistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'showroomlist-dashboard',component:ShowroomlistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'orderlist-dashboard',component:OrderlistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'maintenceorderlist-dashboard',component:MaintenceorderlistDashboardComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'wishlist',component:WishlistComponent,canActivate:[AuthGuard]},
  {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuard]},
  {path:'contact-us',component:ContactUsComponent,canActivate:[AuthGuard]},
  {path:'about-us',component:AboutUsComponent,canActivate:[AuthGuard]},
  {path:'maintenance-order',component:MaintenanceOrderComponent,canActivate:[AuthGuard]},
  
  // {path:'',component:NotFoundComponent,canActivate:[AuthGuard]}, dont use this route



  
  {path:'category/:id',component:CategoryComponent,canActivate:[AuthGuard]},
  {path:'prod-details/:id',component:ProdDetailsComponent,canActivate:[AuthGuard]},
  {path:'store/:id',component:StoreComponent,canActivate:[AuthGuard]},
  {path:'AllProducts',component:AllProductsComponent,canActivate:[AuthGuard]},



  { path:'productform',component:ProductformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path:'productform/:id',component:ProductformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path: 'productdetails/:id',component:ProductdetailsComponent,canActivate:[AuthGuard],data:{role:['admin']}},


  { path:'categoryform',component:CategoryformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path:'categoryform/:id',component:CategoryformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path: 'categorydetails/:id',component:CategorydetailsComponent,canActivate:[AuthGuard],data:{role:['admin']}},



  { path:'postform',component:PostformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path:'postform/:id',component:PostformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path: 'postdetails/:id',component:PostdetailsComponent,canActivate:[AuthGuard],data:{role:['admin']}},



  { path:'showroomform',component:ShowroomformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path:'showroomform/:id',component:ShowroomformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path: 'showroomdetails/:id',component:ShowroomdetailsComponent,canActivate:[AuthGuard],data:{role:['admin']}},


  { path:'userform',component:UserformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path:'userform/:id',component:UserformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  { path: 'userdetails/:id',component:UserdetailsComponent,canActivate:[AuthGuard],data:{role:['admin']}},
  



  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
