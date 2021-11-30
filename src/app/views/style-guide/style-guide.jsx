import m from 'mithril';
import { Button, Dialog, IconButton, TextField, MaterialDesignSpinner as Spinner } from 'polythene-mithril';
import moment from 'moment';
import { Breadcrumb, Container, DateRange, Modal } from '../../components';
import { ChangePassword } from '../../modals';
import { Toaster } from '../../services';

const plusSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>`;

class StyleGuide {
  constructor() {
    this.dateRangeStart = moment();
    this.dateRangeEnd = moment();
  }

  view() {
    return (
      <>
        <Dialog spawn="testing" header={<h1>Header</h1>} body={<p>Content</p>} footer={<p>Footer</p>} />
        <Container>
          <h1>Styles & Examples</h1>
          <h3>Buttons</h3>
          <Button
            raised
            label="Open Modal"
            events={{
              onclick: () => {
                Dialog.show(
                  {
                    backdrop: true,
                  },
                  { spawn: 'testing' }
                );
              },
            }}
          />
          <IconButton
            raised
            icon={{ svg: { content: m.trust(plusSVG) } }}
            events={{
              onclick: () => {
                Toaster.success('Testing success');
                Toaster.error('Testing error');
                Toaster.warning('Testing warning');
                Toaster.info('Testing info');
              },
            }}
          />
          <h3>Inputs</h3>
          <TextField placeholder="Placeholder"></TextField>
          <h3>Date Range</h3>
          <DateRange
            startDate={this.dateRangeStart}
            startDateChange={(date) => {
              this.dateRangeStart = date;
            }}
            endDate={this.dateRangeEnd}
            endDateChange={(date) => {
              this.dateRangeEnd = date;
            }}
          />
          <h3>Breadcrumb</h3>
          <Breadcrumb
            items={[
              { href: '/', text: 'Home' },
              { href: null, text: 'Style Guide' },
            ]}
          />
          <h3>Spinner</h3>
          <Spinner show></Spinner>
          <h3>Typography</h3>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p class="error">I'm an error.</p>
          <h3>Links</h3>
          <ul>
            <li>
              <m.route.Link href="/">Home</m.route.Link>
            </li>
            <li>
              <m.route.Link href="/error">Error</m.route.Link>
            </li>
            <li>
              <m.route.Link href="/style-guide">Style Guide</m.route.Link>
            </li>
          </ul>
        </Container>
      </>
    );
  }
}

module.exports = StyleGuide;
