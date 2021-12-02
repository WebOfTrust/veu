import m from 'mithril';

import { Nav, ToastOutlet } from './components';
import { Error, StyleGuide, Tutorial } from './views';
import './button-styles.jsx';

import 'polythene-css';
import '../scss/defaults.scss';
import '../scss/typography.scss';
import '../scss/globals.scss';

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
m.route(root, '/tutorial/', {
  '/tutorial/add-contacts/': {
    oninit: () => {
      document.title = documentTitle + ' | Tutorial';
    },
    view: () => {
      return (
        <MainLayout>
          <TutorialAddContacts />
        </MainLayout>
      );
    },
  },
  '/tutorial/': {
    oninit: () => {
      document.title = documentTitle + ' | Tutorial';
    },
    view: () => {
      return (
        <MainLayout>
          <Tutorial />
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
