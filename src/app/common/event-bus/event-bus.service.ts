import { Injectable } from '@angular/core';
import {EventData} from './event-data';
import {Subject} from 'rxjs';
import {Events} from './events.enum';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private _bus: Subject<EventData> = new Subject<EventData>();

  constructor() {}

  listen(eventType: Events, action: any) {
    this._bus.pipe(
      filter((e: EventData) => e.eventType === eventType),
      map((e: EventData) => e.data)
    ).subscribe(action);
  }

  next(e: EventData) {
    this._bus.next(e);
  }
}
