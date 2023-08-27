import Notificator from "./Notificator";

export default class PhoneNotification implements Notificator {
  constructor(private phone: string) {}

  sendNotification(message: string): void {
    console.log(`Here should go the implementation \
    to send notification to the phone: ${this.phone} - ${message}`);
  }
}