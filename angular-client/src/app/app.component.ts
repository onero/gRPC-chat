import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChatMessageFromServer } from 'src/proto/chat-service_pb';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gRPC-chat';

  constructor() { }

  ngOnInit() {
  }

}
