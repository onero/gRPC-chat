import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable, Subscription } from 'rxjs';
import { ChatService } from '../chat.service';
import { ChatMessageFromServer } from 'src/proto/chat-service_pb';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  chatStream$: Subscription;
  messages: ChatMessageFromServer[];

  constructor(private chatService: ChatService) {
    this.messages = [];
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  sendMessage(message: string) {
    if (this.chatStream$) {
      this.chatStream$.unsubscribe();
    }

    this.chatStream$ = this.chatService.sendChatMessage(message)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(reply => {
        this.messages.push(reply);
      });
  }

}
