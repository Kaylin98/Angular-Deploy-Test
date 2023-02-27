import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './Data.service';

@Injectable({
  providedIn: 'root'
})
export class GitFollowersService extends DataService {
  constructor(http:HttpClient) {super('https://api.github.com/users/mosh-hamedani/followers',http);}
}
