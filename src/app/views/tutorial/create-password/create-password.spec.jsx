import m from 'mithril';
import mq from 'mithril-query';
import TutorialCreatePassword from './create-password';

describe('TutorialCreatePassword component', () => {
  it('Should create', () => {
    let out = mq(m(TutorialCreatePassword));
    expect(out).toBeTruthy();
  });
});
