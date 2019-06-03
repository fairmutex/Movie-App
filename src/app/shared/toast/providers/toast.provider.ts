import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Toast } from '../models/toast.model';
@Injectable({
  providedIn: 'root'
})
export class ToastProvider {

  list: Toast[];

  constructor() {
    this.list = [];
  }

  getMessages(): Observable<Toast[]> {
    return of(this.list);
  }

  sendMessage(title: string, content: string, style: string, delay: number = 5000) {
    const message = new Toast(title, content, style, delay);
    this.list.push(message);

    // Remove old notifications if exeeding 4
    //  if(this.list.length > 4){
    //     this.dismissMessage(this.list[0].timestamp);
    //  }

    // Remove item after it expires
    setTimeout(() => {
      this.dismissMessage(message.timestamp);
    }, delay);
  }


  dismissMessage(timestamp: Date) {
    const id = this.list.findIndex(x => x.timestamp === timestamp);
    this.list.splice(id, 1);
  }

}

