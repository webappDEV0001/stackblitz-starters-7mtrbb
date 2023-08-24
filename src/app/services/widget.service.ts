import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { Widget } from '../models/widget';
import { WidgetCollection } from '../models/widget-collection';
import { DeleteResponse } from './delete-response';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getWidgets():Observable<WidgetCollection> {
    return this.http.get<WidgetCollection>(`${this.apiUrl}/widgets`);
  }

  deleteWidget(id: string): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.apiUrl}/widgets/${id}`);
  }
}
