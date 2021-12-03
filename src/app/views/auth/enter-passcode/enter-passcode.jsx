import m from 'mithril';
import { Button, TextField } from 'polythene-mithril';
import { Container } from '../../../components';

class EnterPasscode {
  constructor() {}

  view() {
    return (
      <>
        <Container class="headspace flex flex-align-center">
          <div class="flex-2">
            <img src="https://via.placeholder.com/540x440" />
          </div>
          <div class="flex-3" style="padding: 1rem">
            <h1>Please enter your passcode.</h1>
            <p class="font-color--light">
              You can find your 22-character passcode by referring back to your storage spot (1Password, Last Pass, Safe
              Deposit Box) and entering it into the box below.
            </p>
            <TextField
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
