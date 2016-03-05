import {Page, NavController, NavParams} from 'ionic-angular';
import {ChatroomShowPage} from '../../chatroom/show/show';


@Page({
  templateUrl: 'build/pages/question/index/index.html'
})
export class QuestionIndexPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    this.questions = [
      {
        subject: 'family',
        text: 'We argue a lot ... My parents just dont understand me',
        inserted_at: new Date()
      },
      {
        subject: 'sex',
        text: 'I want to know how to protect myself',
        inserted_at: new Date()
      }
    ];
  }

  questionTapped(event, question) {
    this.nav.push(ChatroomShowPage, {
      question: question
    })
  }
}
