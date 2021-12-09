import m from 'mithril';
import moment from 'moment';
import {
  Button,
  Breadcrumb,
  Container,
  DateRange,
  IconButton,
  Modal,
  Select,
  Spinner,
  TextField,
} from '../../components';
import { ChangePassword } from '../../modals';
import { Toaster } from '../../services';

class StyleGuide {
  constructor() {
    this.modalOpen = false;
    this.dateRangeStart = moment();
    this.dateRangeEnd = moment();
  }

  view() {
    return (
      <>
        <Modal
          style={{
            animation: '0.4s slideInTop',
            width: '320px',
          }}
          isOpen={this.modalOpen}
          onClose={() => {
            this.modalOpen = false;
          }}
          header={<h1>Header</h1>}
          content={<p>Content</p>}
          footer={<p>Footer</p>}
        />
        <Container>
          <h1 class="headspace">Styles & Examples</h1>
          <h3>Button</h3>
          <Button label="Text" />
          <Button outlined label="Outlined" />
          <Button raised label="Raised" />
          <Button raised iconLeading="search" label="Icon Leading" />
          <Button raised iconTrailing="search" label="Icon Trailing" />
          <Button ripple={false} raised label="No Ripple" />
          <Button class="button__gray" raised label="Gray" />
          <h3>Icon Button</h3>
          <IconButton icon="search" />
          <IconButton icon="visibility" ripple={false} />
          <h3>Text Field</h3>
          <TextField placeholder="Placeholder"></TextField>
          <h3>Select</h3>
          <Select />
          <h3>Modal</h3>
          <Button
            raised
            label="Open Modal"
            onclick={() => {
              this.modalOpen = true;
            }}
          />
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
          <Spinner />
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
              <m.route.Link href="/tutorial">Tutorial</m.route.Link>
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
