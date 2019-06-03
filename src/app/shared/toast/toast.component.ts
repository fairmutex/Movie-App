import { Component, OnInit } from '@angular/core';
import { ToastProvider } from './providers/toast.provider';
import { ToastSVGProvider } from './providers/toastsvg.provider';

@Component({
  selector: 'toast-messages',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  messages: any;

  constructor(private toastProvider: ToastProvider,
              public _SVGProvider: ToastSVGProvider) {

  }

  ngOnInit() {
    this.messages = this.toastProvider.getMessages();
  }

  dismiss(id) {
    this.toastProvider.dismissMessage(id);
  }

}