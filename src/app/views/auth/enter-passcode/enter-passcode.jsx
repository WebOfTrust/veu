import m from 'mithril';
import { Button, TextField } from 'polythene-mithril';
import { Container } from '../../../components';

class CreatePasscode {
  constructor() {}

  view() {
    return (
      <>
        <Container class="headspace">
          <div>
            <img src="https://via.placeholder.com/540x440" />
          </div>
          <div>
            <h1>Please enter your passcode.</h1>
            <p>
              You can find your 22-character passcode by referring back to your storage spot (1Password, Last Pass, Safe
              Deposit Box) and entering it into the box below.
            </p>
            <TextField placeholder="xxxxx-xxxx-xxxxx-xxxx-xxxx" />
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
        </Container>
      </>
    );
  }
}

module.exports = CreatePasscode;
