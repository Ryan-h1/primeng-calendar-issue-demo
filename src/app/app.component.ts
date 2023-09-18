import { Component, HostListener, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'primeng-calendar-issue-demo';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setTouchUI();
  }

  touchUI: WritableSignal<boolean> = signal(false);
  datesSelected: WritableSignal<Date[] | undefined> = signal(undefined);
  rangeDates: Date[] | undefined;
  disabledDates: Date[] = this.generateRandomDisabledDatesFor2023();

  /**
   * Sets the touchUI property based on the screen size
   */
  private setTouchUI(): void {
    this.touchUI.set(window.innerWidth <= 768);
  }

  /**
   * Generates an array of random dates to disable for the year 2023.
   * This function is pretty messy and is just for demo purposes.
   *
   * @returns an array of random dates to disable for the year 2023
   */
  private generateRandomDisabledDatesFor2023(): Date[] {
    const disabledDates: Date[] = [];
    const totalDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Leap year isn't considered for simplicity

    for (let month = 0; month < 12; month++) {
      const daysToDisable = Math.floor(Math.random() * 5) + 1; // Disabling 1 to 5 days randomly for each month
      for (let i = 0; i < daysToDisable; i++) {
        let randomDay: number;
        do {
          randomDay = Math.floor(Math.random() * totalDaysInMonth[month]) + 1;
        } while (
          disabledDates.some(
            (date) =>
              date.getTime() === new Date(2023, month, randomDay).getTime()
          )
        );

        disabledDates.push(new Date(2023, month, randomDay));
      }
    }

    return disabledDates;
  }
}
