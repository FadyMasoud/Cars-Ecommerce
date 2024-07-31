import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserformComponent } from './userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PostformComponent } from './postform/postform.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ShowroomformComponent } from './showroomform/showroomform.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserlistDashboardComponent } from './userlist-dashboard/userlist-dashboard.component';
import { PostlistDashboardComponent } from './postlist-dashboard/postlist-dashboard.component';
import { ProductlistDashboardComponent } from './productlist-dashboard/productlist-dashboard.component';
import { CategorylistDashboardComponent } from './categorylist-dashboard/categorylist-dashboard.component';
import { ShowroomlistDashboardComponent } from './showroomlist-dashboard/showroomlist-dashboard.component';
import { ShowroomdetailsComponent } from './showroomdetails/showroomdetails.component';
import { OrderlistDashboardComponent } from './orderlist-dashboard/orderlist-dashboard.component';
import { MaintenceorderlistDashboardComponent } from './maintenceorderlist-dashboard/maintenceorderlist-dashboard.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { StoreComponent } from './store/store.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MaintenanceOrderComponent } from './maintenance-order/maintenance-order.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryformComponent,
    CategorydetailsComponent,
    ProductformComponent,
    ProductdetailsComponent,
    UserformComponent,
    UserdetailsComponent,
    PostformComponent,
    PostdetailsComponent,
    ShowroomformComponent,
    UserlistDashboardComponent,
    PostlistDashboardComponent,
    ProductlistDashboardComponent,
    CategorylistDashboardComponent,
    ShowroomlistDashboardComponent,
    ShowroomdetailsComponent,
    OrderlistDashboardComponent,
    MaintenceorderlistDashboardComponent,
    HomeComponent,
    CategoryComponent,
    ProdDetailsComponent,
    StoreComponent,
    AllProductsComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    BlogComponent,
    WishlistComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    CheckOutComponent,
    MaintenanceOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
