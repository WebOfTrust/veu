import m from 'mithril';
import mq from 'mithril-query';
import TutorialRequestCredentials from './request-credentials';

describe('TutorialRequestCredentials component', () => {
  it('Should create', () => {
    let out = mq(m(TutorialRequestCredentials));
    expect(out).toBeTruthy();
  });
});
