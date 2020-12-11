import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './users/auth/auth.interceptor';
import {CategoriesModule} from './categories/categories.module';
import {BagModule} from './bag/bag.module';
import {WishlistModule} from './wishlist/wishlist.module';

@NgModule({
  declarations: [AppRoutingModule.components],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule,
    CategoriesModule,
    BagModule,
    WishlistModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
