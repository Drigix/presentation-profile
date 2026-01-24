export class DateUtils {

  public static calculatePersonAge(date: Date): number {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const isMonthBeforeBirthDay = (currentMonth - (date.getMonth() + 1)) < 0
    return (currentYear - date.getFullYear()) + (isMonthBeforeBirthDay ? -1 : 0) ;
  }
}
