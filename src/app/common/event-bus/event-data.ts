import {Events} from './events.enum';

export class EventData {
  constructor(public eventType: Events, public data: any) {
  }
}
