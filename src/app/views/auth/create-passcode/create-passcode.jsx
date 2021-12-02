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
            <h1>Create a Passcode</h1>
            <p>
              Generate your passcode here to encrypt your desktop software and then copy into the following screen. Make
              sure to store your password somewhere safe: either in 1Password, Last Pass, a comparable app, or printed
              and in a safe deposit box.
            </p>
            <TextField placeholder="Passcode" />
            <Button raised label="Generate New" />
            <br />
            <Button label="Use 1Password" />
            <Button label="Use Last Pass" />
            <br />
            <Button
              raised
              className="button__blue"
              label="Continue"
              events={{
                onclick: () => {
                  m.route.set('/auth/enter-passcode');
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
