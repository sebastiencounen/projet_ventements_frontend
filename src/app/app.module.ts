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
import {OrdersModule} from './orders/orders.module';
import {AdminModule} from './admin/admin.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FileUploaderComponent} from './common/components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [AppRoutingModule.components],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    UsersModule,
    CategoriesModule,
    BagModule,
    WishlistModule,
    OrdersModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
