import { Injectable } from '@angular/core';
import {BagRepository} from './bag-repository';
import {Observable} from 'rxjs';
import {Bag} from '../types/bag';
import {ManageUserTokenService} from '../../users/services/manage-user-token.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BagServerService implements BagRepository {
  private static readonly URL_BAG: string = environment.serverAddress + '/users';
  private static readonly URL_BAGGED_ITEM: string = environment.serverAddress + '/baggedItem';

  userId: number = this.manageToken.getUserIdViaToken();

  constructor(private manageToken: ManageUserTokenService, private httpClient: HttpClient) {}

  getUserBag(): Observable<Bag> {
    return this.httpClient.get<Bag>(BagServerService.URL_BAG + '/' + this.userId + '/bag');
  }
}
