import m from 'mithril';
import mq from 'mithril-query';
import Home from './home';

describe('Home component', () => {
  it('Should create', () => {
    let out = mq(m(Home));
    expect(out).toBeTruthy();
  });
});
