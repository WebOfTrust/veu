import m from 'mithril';
import { Button, TextField } from 'polythene-mithril';
import { Container } from '../../../components';
import passcodeImg from '../../../../assets/img/passcode.png';

class EnterPasscode {
  constructor() {
    this.passcode = '';
  }

  continueDisabled() {
    let passcodeValid = /^[a-zA-Z0-9]{22}$/.test(this.passcode);
    return !passcodeValid;
  }

  view() {
    return (
      <>
        <Container class="headspace flex flex-align-center">
          <div class="flex-2">
            <img src={passcodeImg} />
          </div>
          <div class="flex-3" style="padding: 1rem">
            <h1>Please enter your passcode.</h1>
            <p class="font-color--light">
              You can find your 22-character passcode by referring back to your storage spot (1Password, Last Pass, Safe
              Deposit Box) and entering it into the box below.
            </p>
            <TextField
              events={{
                oninput: (e) => {
                  this.passcode = e.target.value;
                },
              }}
              placeholder="xxxxx-xxxx-xxxxx-xxxx-xxxx"
              validate={(val) => {
                return /^[a-zA-Z0-9]{22}$/.test(val)
                  ? null
                  : {
                      valid: false,
                      error: 'Passcode must have 22 characters, letters and numbers (no symbols)',
                    };
              }}
            />
            <div class="flex flex-justify-end" style={{ marginTop: '2rem' }}>
              <Button
                raised
                className="button__blue"
                label="Continue"
                disabled={this.continueDisabled()}
                events={{
                  onclick: () => {
                    m.route.set('/auth/configure-identifier');
                  },
                }}
              />
            </div>
          </div>
        </Container>
      </>
    );
  }
}

module.exports = EnterPasscode;
