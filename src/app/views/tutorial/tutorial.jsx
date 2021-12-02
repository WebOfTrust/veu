import { Button } from 'polythene-mithril';
import { Container } from '../../components';
import Steps from './steps.jsx';
import './tutorial.scss';

import m from 'mithril';

class Tutorial {
  constructor() {
    this.secondsPerStep = 10;
    this.steps = [
      {
        header: `Create Your Passcode`,
        subheader: `Utilizing 1Password, Last Pass or our passcode generator, create and store a 22 character passcode.`,
        image: 'https://via.placeholder.com/540x440?text=Create+Your+Passcode',
      },
      {
        header: `Secure Your Software`,
        subheader: `Create an identifier that is yours going forward that you can utilize to connect with and verify others.`,
        image: 'https://via.placeholder.com/540x440?text=Secure+Your+Software',
      },
      {
        header: `Add New Contacts`,
        subheader: `Add new contacts after obtaining their contact card. Verify your contacts over a short zoom call.`,
        image: 'https://via.placeholder.com/540x440?text=Add+New+Contacts',
      },
      {
        header: `Request Credentials`,
        subheader: `After diligence has been completed, you can provide your contact card to request new credentials.`,
        image: 'https://via.placeholder.com/540x440?text=Request+Credentials',
      },
    ];
    this.stepSelectedIdx = 0;
    this.stepSelected = this.steps[0];
  }

  oninit() {
    this.interval = setInterval(() => {
      if (this.stepSelectedIdx >= 3) {
        this.stepSelectedIdx = 0;
      } else {
        this.stepSelectedIdx++;
      }
      this.stepSelected = this.steps[this.stepSelectedIdx];
      m.redraw();
    }, 1000 * this.secondsPerStep);
  }

  view() {
    return (
      <>
        <Container>
          <div class="headspace">
            <h1 class="text--center">Welcome to the vLEI Ecosystem</h1>
            <p class="text--center font-color--light">
              Getting started is easy, after the sign-up process, you can add and verify connections, request your own
              credentials and store contact information for later use.
            </p>
          </div>
          {this.stepSelected && (
            <div class="headspace tutorial">
              <div class="tutorial__info">
                <h1 class="tutorial__header">{this.stepSelected.header}</h1>
                <h3 class="tutorial__subheader font-color--light">{this.stepSelected.subheader}</h3>
                <Steps
                  count={this.steps.length}
                  selected={this.stepSelectedIdx}
                  selectedChange={(idx) => {
                    this.stepSelectedIdx = idx;
                    this.stepSelected = this.steps[this.stepSelectedIdx];
                  }}
                  style={{ marginBottom: '1rem' }}
                ></Steps>
                <Button raised className="button__blue" label="Get Started" />
              </div>
              <div class="tutorial__image__container">
                <img class="tutorial__image" src={this.stepSelected.image} />
              </div>
            </div>
          )}
        </Container>
      </>
    );
  }
}

module.exports = Tutorial;
