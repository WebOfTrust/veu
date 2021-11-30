import m from 'mithril';
import { IconButton } from 'polythene-mithril';
import moment from 'moment';
import './date-picker.scss';

const leftSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>`;
const rightSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>`;

class DatePicker {
  constructor() {
    this.selected = moment();
    this.currentMonth = 0;
    this.currentYear = 0;
    this.firstDayWeekday = 0;
    this.daysInMonth = 0;
  }

  oninit(vnode) {
    let date = null;
    if (!vnode.attrs.initialDate) {
      date = moment();
    } else {
      date = moment(vnode.attrs.initialDate);
    }
    this.selected = date;
    this.currentMonth = date.month();
    this.currentYear = date.year();
    this.daysInMonth = date.daysInMonth();
    this.firstDayWeekday = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).day();
  }

  back() {
    let current = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).subtract(1, 'months');
    this.currentMonth = current.month();
    this.currentYear = current.year();
    this.daysInMonth = current.daysInMonth();
    this.firstDayWeekday = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).day();
  }

  forward() {
    let current = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).add(1, 'months');
    this.currentMonth = current.month();
    this.currentYear = current.year();
    this.daysInMonth = current.daysInMonth();
    this.firstDayWeekday = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).day();
  }

  clickDay(vnode, day) {
    if (!day) {
      return;
    }
    this.select(vnode, day);
  }

  select(vnode, day) {
    this.selected = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-${this.zeroPad(day)}`);
    vnode.attrs.selectedChange(this.selected);
  }

  dayIsSelected(day) {
    if (!day || !this.selected) {
      return false;
    }
    let dayAsMoment = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-${this.zeroPad(day)}`);
    return this.selected.isSame(dayAsMoment, 'day');
  }

  daysInMonthArray() {
    let array = [];
    for (let i = 0; i < this.daysInMonth; i++) {
      array.push(i + 1);
    }
    return array;
  }

  sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  weekChunk() {
    let dimArray = this.daysInMonthArray();
    let firstWeek = []; // e.g: [null, null, null, null, null, 1, 2]
    let lastDayInFirstWeek = 0;
    let rest = [];
    for (let i = 0; i < this.firstDayWeekday; i++) {
      firstWeek.push(null);
    }
    for (let i = this.firstDayWeekday; i < 7; i++) {
      firstWeek.push(dimArray[i - this.firstDayWeekday]);
      lastDayInFirstWeek = i - this.firstDayWeekday;
    }
    for (let i = lastDayInFirstWeek + 1; i < dimArray.length; i++) {
      rest.push(dimArray[i]);
    }
    return this.sliceIntoChunks(firstWeek.concat(rest), 7);
  }

  formatHeader() {
    return moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).format('MMMM YYYY');
  }

  zeroPad(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  view(vnode) {
    return (
      <div class="datePicker">
        <div class="datePicker__navigation">
          <IconButton
            icon={{ svg: { content: m.trust(rightSVG) } }}
            events={{
              onclick: () => {
                this.back();
              },
            }}
          />
          <div class="datePicker__navigation__month">{this.formatHeader()}</div>
          <IconButton
            icon={{ svg: { content: m.trust(leftSVG) } }}
            events={{
              onclick: () => {
                this.forward();
              },
            }}
          />
        </div>
        <div class="datePicker__calendar">
          <table>
            <thead>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              {this.weekChunk().map((week) => {
                return (
                  <tr>
                    {week.map((day) => {
                      return (
                        <td
                          class={this.dayIsSelected(day) ? 'datePicker__calendar--selected' : ''}
                          onclick={() => {
                            this.clickDay(vnode, day);
                          }}
                        >
                          {day}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

module.exports = DatePicker;
