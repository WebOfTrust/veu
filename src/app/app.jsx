import m from 'mithril';

import { Nav, ToastOutlet } from './components';
import { Error, Home, StyleGuide } from './views';

import '../scss/defaults.scss';
import '../scss/typography.scss';
// import '../scss/globals.scss';
import 'polythene-css';

let root = document.body;

const MainLayout = {
  view: (vnode) => {
    return (
      <>
        <ToastOutlet />
        <Nav />
        {vnode.children}
      </>
    );
  },
};

const documentTitle = 'vLEI Ecosystem';
m.route.prefix = '';
m.route(root, '/', {
  '/': {
    oninit: () => {
      document.title = documentTitle;
    },
    view: () => {
      return (
        <MainLayout>
          <Home />
        </MainLayout>
      );
    },
  },
  '/style-guide': {
    oninit: () => {
      document.title = documentTitle + ' | Style Guide';
    },
    view: () => {
      return (
        <MainLayout>
          <StyleGuide />
        </MainLayout>
      );
    },
  },
  '/:404': {
    oninit: () => {
      document.title = documentTitle + ' | Error';
    },
    view: () => {
      return (
        <MainLayout>
          <Error />
        </MainLayout>
      );
    },
  },
});
