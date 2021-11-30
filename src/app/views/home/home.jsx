import m from 'mithril';
import { Container } from '../../components';
import './home.scss';

class Home {
  constructor() {}

  oninit() {}

  onremove() {}

  view() {
    return (
      <>
        <div class="home__jumbo">
          <Container>
            <h1 class="font-size--48">Credentials that make business transactions and KYC easier and more secure.</h1>
            <p class="font-color--light">
              vLEI Credentials are issued to legal entities after a rigorous vetting process and can help shorten or
              streamline your KYC process when facilitating business transactions.
            </p>
            <div class="home__jumbo__buttons">
              <button
                class="button"
                style={{ marginRight: '1rem' }}
                onclick={() => {
                  m.route.set('/start-now');
                }}
              >
                Start here
              </button>
              <button
                class="button-hollow"
                onclick={() => {
                  m.route.set('/learn-more');
                }}
              >
                Learn more
              </button>
            </div>
          </Container>
        </div>
        <Container>
          <div class="text--center">
            <h1>How do vLEI Credentials work?</h1>
            <p>
              They're a secure way to request entity verification, and to empower key employees to facilitate
              transactions.
            </p>
          </div>

          <div class="home__infoList">
            <div class="home__infoItem">
              <i class="fa fa-shield"></i>
              <h3>Provided by Qualified Issuers</h3>
              <p>
                After a business sets up a LEI (Legal Entity Identifier), they can begin the vetting process with one of
                our qualified issuers for vLEI credentials.
              </p>
            </div>
            <div class="home__infoItem">
              <i class="fa fa-wrench"></i>
              <h3>Given to Trusted Associates</h3>
              <p>
                After a business receives credentials, trusted associates are given role specific credentials so they
                can facilitate transactions.
              </p>
            </div>
            <div class="home__infoItem">
              <i class="fa fa-key"></i>
              <h3>Verifiable by Businesses</h3>
              <p>
                A clear provenance chain from end to end shows businesses where these credentials originated and when
                due diligence was conducted.
              </p>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

module.exports = Home;
