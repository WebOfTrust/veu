import m from 'mithril';
import mq from 'mithril-query';
import TutorialCompleteSignIn from './complete-signin';

describe('TutorialCompleteSignIn component', () => {
  it('Should create', () => {
    let out = mq(m(TutorialCompleteSignIn));
    expect(out).toBeTruthy();
  });
});
