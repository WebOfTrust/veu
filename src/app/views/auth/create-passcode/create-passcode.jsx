import m from 'mithril';
import { Button, TextField } from 'polythene-mithril';
import { Container } from '../../../components';
import './create-passcode.scss';

class CreatePasscode {
  constructor() {}

  view() {
    return (
      <>
        <Container class="headspace flex flex-align-center">
          <div class="flex-2">
            <img src="https://via.placeholder.com/540x440" />
          </div>
          <div class="flex-3" style="padding: 1rem">
            <h1>Create a Passcode</h1>
            <p class="font-color--light">
              Generate your passcode here to encrypt your desktop software and then copy into the following screen. Make
              sure to store your password somewhere safe: either in 1Password, Last Pass, a comparable app, or printed
              and in a safe deposit box.
            </p>
            <div class="passcodeInput">
              <div class="passcode">
                <span>OG8jvw9bTmUd5J92iKYmfU</span>
                <i class="fas fa-copy"></i>
              </div>
              <Button raised label="Generate New" />
            </div>
            <div class="flex flex-justify-between" style={{ marginTop: '2rem' }}>
              <Button label="Use 1Password" />
              <Button label="Use Last Pass" />
            </div>
            <div class="flex flex-justify-end" style={{ marginTop: '2rem' }}>
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
          </div>
        </Container>
      </>
    );
  }
}

module.exports = CreatePasscode;
