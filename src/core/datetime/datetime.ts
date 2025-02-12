export class DateTime {
  constructor(date: string) {
    return new Date(date);
  }
  static fromISO(date: string): DateTime {
    return new DateTime(date);
  }
}
