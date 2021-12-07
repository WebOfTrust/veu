import m from 'mithril';
import { Button, Dialog, IconButton, TextField, Toolbar, ToolbarTitle } from 'polythene-mithril';
import { Container } from '../../../components';
import './create-passcode.scss';
import createYourPasscode from '../../../../assets/img/create-your-passcode.png';
import wait from '../../../../assets/img/wait.png';

const iconCloseSVG =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

class CreatePasscode {
  constructor() {
    this.passcode = '';
    this.copied = false;
    this.generateNewPasscode();

    this.savePassModalOptions = {
      backdrop: true,
      header: (
        <Toolbar border>
          <ToolbarTitle>Wait! Did you save your passcode?</ToolbarTitle>
          <IconButton
            icon={{ svg: { content: m.trust(iconCloseSVG) } }}
            events={{
              onclick: () => {
                Dialog.hide();
              },
            }}
          />
        </Toolbar>
      ),
      body: (
        <>
          <img style={{ marginRight: '1rem' }} src={wait} />
          <h3 class="font-color--light">
            If you forget your passcode, you lose access to your wallet. Make sure that you store it someplace safe.
          </h3>
        </>
      ),
      footerButtons: (
        <>
          <Button
            label="Cancel"
            events={{
              onclick: () => {
                Dialog.hide();
              },
            }}
          />
          <Button
            label="I Saved My Passcode"
            events={{
              onclick: () => {
                m.route.set('/auth/enter-passcode');
                Dialog.hide();
              },
            }}
          />
        </>
      ),
    };
  }

  copyPasscode() {
    this.copied = false;
    navigator.clipboard.writeText(this.passcode).then(
      () => {
        this.copied = true;
        m.redraw();
      },
      () => {
        this.copied = false;
        m.redraw();
      }
    );
  }

  generateNewPasscode() {
    this.copied = false;
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 22; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.passcode = result;
  }

  view() {
    return (
      <>
        <Container class="headspace flex flex-align-center">
          <div class="flex-2">
            <img src={createYourPasscode} />
          </div>
          <div class="flex-3" style="padding: 1rem">
            <h1>Create a Passcode</h1>
            <p class="font-color--light">
              Generate your passcode here to encrypt your desktop software and then copy into the following screen. Make
              sure to store your password somewhere safe: either in 1Password, Last Pass, a comparable app, or printed
              and in a safe deposit box.
            </p>
            <div class="passcodeInput">
              <div
                class="passcode"
                onclick={() => {
                  this.copyPasscode();
                }}
              >
                <span>{this.passcode}</span>
                <i class="fas fa-copy"></i>
              </div>
              <Button
                raised
                label="Generate New"
                events={{
                  onclick: () => {
                    this.generateNewPasscode();
                  },
                }}
              />
            </div>
            {this.copied ? <p class="font-color--green font-weight--medium">Passcode is copied!</p> : null}
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
                    Dialog.show(this.savePassModalOptions);
                  },
                }}
              />
            </div>
          </div>
        </Container>
        <Dialog />
      </>
    );
  }
}

module.exports = CreatePasscode;
