import m from 'mithril';

import { Nav, ToastOutlet } from './components';
import {
  Error,
  StyleGuide,
  TutorialAddContacts,
  TutorialCompleteSignIn,
  TutorialCreatePassword,
  TutorialRequestCredentials,
} from './views';

import '../scss/defaults.scss';
import '../scss/typography.scss';
import '../scss/globals.scss';
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
m.route(root, '/tutorial/create-password/', {
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
  '/tutorial/complete-signin/': {
    oninit: () => {
      document.title = documentTitle + ' | Tutorial';
    },
    view: () => {
      return (
        <MainLayout>
          <TutorialCompleteSignIn />
        </MainLayout>
      );
    },
  },
  '/tutorial/create-password/': {
    oninit: () => {
      document.title = documentTitle + ' | Tutorial';
    },
    view: () => {
      return (
        <MainLayout>
          <TutorialCreatePassword />
        </MainLayout>
      );
    },
  },
  '/tutorial/request-credentials/': {
    oninit: () => {
      document.title = documentTitle + ' | Tutorial';
    },
    view: () => {
      return (
        <MainLayout>
          <TutorialRequestCredentials />
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
