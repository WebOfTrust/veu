import m from 'mithril';
import mq from 'mithril-query';
import TutorialAddContacts from './add-contacts';

describe('TutorialAddContacts component', () => {
  it('Should create', () => {
    let out = mq(m(TutorialAddContacts));
    expect(out).toBeTruthy();
  });
});
