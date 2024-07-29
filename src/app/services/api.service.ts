import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  newbaseurl="http://localhost/FirstLaravel-app/public/api";

  constructor(private http:HttpClient) { }


  /////////////////////////////////////////////////////////////
  //posts
  get_posts(){
    console.log("get_posts_api");
    return this.http.get<[]>(this.newbaseurl+'/posts');
  }


  get_post_by_id(id:any){
    console.log("get_posts_by_id_api");
    return this.http.get<[]>(this.newbaseurl+'/posts/'+id);
  }

  insert_posts(postData: any){
    console.log("insert_posts_api");
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<[]>(this.newbaseurl+'/posts', postData,{headers: headers});
  }

  update_posts(id:any,postData: any){
    console.log("update_posts_api");
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<[]>(this.newbaseurl+'/posts/'+id, postData,{headers: headers});
  }
  delete_posts(id:any){
    console.log("delete_posts_api");
    return this.http.delete<[]>(this.newbaseurl+'/posts/'+id);
  }
  // restore_posts(id:any,postdata:any){
  //   console.log("restore_posts_api");
  //   return this.http.post<[]>(`${this.newbaseurl}/posts/${id}/restore`,postdata);

  // }


  // getFirstTwoPosts(){
  //   console.log("get_first_tow_posts_api");
  //   return this.http.get<[]>(this.newbaseurl+'/posts/first-two');
  // }

  // get_improtant_post(){
  //   console.log("get_improtant_post_api");
  //   return this.http.get<[]>(this.newbaseurl+'/posts/important');
  // }
 

  /////////////////////////////////////////////////////////////////////////////

  //categories

  //get all category in home page in first section (in carousel)
  get_categories(){
    console.log("get_categories_api");
    return this.http.get<[]>(this.newbaseurl+'/categories');
  }

  getCategoryById(id: number): Observable<any> {
    console.log("getCategoryById_api");
    return this.http.get<any>(`${this.newbaseurl}/categories/${id}`);
  }
insert_category(categoryData: any){
    console.log("insert_category_api");
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<[]>(this.newbaseurl+'/categories', categoryData,{headers: headers});
  }
  update_category(id:number,categoryData:any){
    console.log("update_category_api");
    console.log(categoryData);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<[]>(this.newbaseurl+'/categories/'+id, categoryData,{headers: headers});
  }

  delete_category(id:any){
    console.log("delete_category_api");
    return this.http.delete<[]>(this.newbaseurl+'/categories/'+id);
  }

  // restore_category(id:any,categorydata:any){
  //   console.log("restore_category_api");
  //   return this.http.post<[]>(`${this.newbaseurl}/categories/${id}/restore`,categorydata);
  // }


  ///////////////////////////////////////////////////////////////////////////

  //products

  //to get all products in dashboard
  get_products(){
    console.log("get_products_api");
    return this.http.get<[]>(this.newbaseurl+'/products');
  }

  //to get single product by id in prod-details.ts
  getProductById(id: number): Observable<any> {
    console.log('Get product by id api');
    const url = `${this.newbaseurl}/products/${id}`;
    return this.http.get<any>(url);
  }
  //to get products for each category in (use it in component productsforeachcategory.ts )
  get_products_for_each_category(id_category:number): Observable<any> {
    console.log("get_products_for_each_category_api");
    return this.http.get<any>(`${this.newbaseurl}/productsbycategory/${id_category}`);
  }

  insert_product(productData: any){
    console.log("insert_product_api");
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<[]>(this.newbaseurl+'/products', productData,{headers: headers});
  }
  update_product(productId: number,productData:any){
    console.log("update_product_api");
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<[]>(this.newbaseurl+'/products/'+productId, productData,{headers: headers});
  }

  delete_product(id:any){
    console.log("delete_product_api");
    return this.http.delete<[]>(this.newbaseurl+'/products/'+id);
  }


  //////////////////////////////////////////////////////////////////////////////

  //showrooms
  get_showrooms(){
    console.log("get_showrooms_api");
    return this.http.get<[]>(this.newbaseurl+'/showrooms');
  }

  get_showroom_by_id(id: number): Observable<any> {
    console.log("get_showroom_by_id_api");
    return this.http.get<any>(`${this.newbaseurl}/showrooms/${id}`);
  }

  insert_showroom(showroomData: any){
    console.log("insert_showroom_api");
    return this.http.post<[]>(this.newbaseurl+'/showrooms', showroomData);
  }

  update_showroom(id:number,showroomData: any){
    console.log("update_showroom_api");
    return this.http.put<[]>(this.newbaseurl+'/showrooms/'+id, showroomData);
  }

  delete_showroom(id:any){
    console.log("delete_showroom_api");
    return this.http.delete<[]>(this.newbaseurl+'/showrooms/'+id);
  }

  // restore_showroom(id:any,showroomdata:any){
  //   console.log("restore_showroom_api");
  //   return this.http.post<[]>(`${this.newbaseurl}/showrooms/${id}/restore`,showroomdata);
  // }


  //////////////////////////////////////////////////////////////////////////////


  get_user(){
    console.log("get_user_api");
    return this.http.get<[]>(this.newbaseurl+'/users');
  }

  get_user_by_id(id: number): Observable<any> {
    console.log("get_user_by_id_api");
    return this.http.get<any>(`${this.newbaseurl}/users/${id}`);
  }

  //to register user
  insert_user(userData: any){
    console.log("insert_user_api");
    return this.http.post<[]>(this.newbaseurl+'/register', userData);
  }

  //to login user
  login_user(userData: any){
    console.log("login_user_api");
    return this.http.post<[]>(this.newbaseurl+'/login', userData);
  }

  update_user(id:number,userData: any){
    console.log("update_user_api");
    return this.http.put<[]>(this.newbaseurl+'/users/'+id, userData);
  }

  delete_user(id:any){
    console.log("delete_user_api");
    return this.http.delete<[]>(this.newbaseurl+'/users/'+id);
  }

  ////////////////////////////////////////////////////////////////////////////




}
