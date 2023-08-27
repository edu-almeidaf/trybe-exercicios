import Notificator from "./Notificator";

export default class EmailNotification implements Notificator {
  constructor(private email: string) {}

  sendNotification(message: string): void {
    console.log(`Here should go the implementation \
    to send notification to the email: ${this.email} - ${message}`);
  }
}