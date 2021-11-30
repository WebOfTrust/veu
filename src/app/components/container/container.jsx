import m from 'mithril';

class Container {
  constructor() {}

  view(vnode) {
    return <div class="container">{vnode.children}</div>;
  }
}

module.exports = Container;
