import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/chatroom/show/show.html'
})
export class ChatroomShowPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.provider = {
      name: 'Peter'
    };
    this.question = navParams.get('question');
  }
}
