import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  getRandomChuckNorrisJoke() {
    return this.httpService.get('https://api.chucknorris.io/jokes/random');
  }
}
