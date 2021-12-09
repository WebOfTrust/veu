import m from 'mithril';
import { MDCCircularProgress } from '@material/circular-progress';
import { UUID } from '../../services';

class Spinner {
  constructor() {
    this.randomId = 'u' + UUID.uuidv4().substring(0, 8);
  }

  oncreate() {
    this.mdcInstance = new MDCCircularProgress(document.getElementById(this.randomId));
  }

  view() {
    return (
      <>
        <div
          id={this.randomId}
          class="mdc-circular-progress mdc-circular-progress--indeterminate"
          style="width:48px;height:48px;"
          role="progressbar"
          aria-label="Example Progress Bar"
          aria-valuemin="0"
          aria-valuemax="1"
        >
          <div class="mdc-circular-progress__determinate-container">
            <svg
              class="mdc-circular-progress__determinate-circle-graphic"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4" />
              <circle
                class="mdc-circular-progress__determinate-circle"
                cx="24"
                cy="24"
                r="18"
                stroke-dasharray="113.097"
                stroke-dashoffset="113.097"
                stroke-width="4"
              />
            </svg>
          </div>
          <div class="mdc-circular-progress__indeterminate-container">
            <div class="mdc-circular-progress__spinner-layer">
              <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
                <svg
                  class="mdc-circular-progress__indeterminate-circle-graphic"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke-dasharray="113.097"
                    stroke-dashoffset="56.549"
                    stroke-width="4"
                  />
                </svg>
              </div>
              <div class="mdc-circular-progress__gap-patch">
                <svg
                  class="mdc-circular-progress__indeterminate-circle-graphic"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke-dasharray="113.097"
                    stroke-dashoffset="56.549"
                    stroke-width="3.2"
                  />
                </svg>
              </div>
              <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
                <svg
                  class="mdc-circular-progress__indeterminate-circle-graphic"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke-dasharray="113.097"
                    stroke-dashoffset="56.549"
                    stroke-width="4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

module.exports = Spinner;
