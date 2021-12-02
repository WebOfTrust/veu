import m from 'mithril';
import { Button, TextField } from 'polythene-mithril';
import { Container } from '../../../components';

class ConfigureIdentifier {
  constructor() {}

  view() {
    return (
      <>
        <Container class="headspace">
          <div>
            <img src="https://via.placeholder.com/540x440" />
          </div>
          <div>
            <h1>Create Your Alias</h1>
            <label>What would you like your alias to be?</label>
            <TextField placeholder="Jane Smith - QVI Corp." />
            <label>Witnesses</label>
            <TextField placeholder="GLEIF Witness Network" />
            <Button
              raised
              className="button__blue"
              label="Continue"
              events={{
                onclick: () => {
                  m.route.set('/');
                },
              }}
            />
          </div>
        </Container>
      </>
    );
  }
}

module.exports = ConfigureIdentifier;
