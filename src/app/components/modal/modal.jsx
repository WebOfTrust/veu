import m from 'mithril';
import { IconButton } from 'polythene-mithril';
import './modal.scss';

const xIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>`;

class Modal {
  constructor() {}

  close(vnode) {
    if (vnode.attrs.onClose) {
      vnode.attrs.onClose();
    }
  }

  view(vnode) {
    return (
      vnode.attrs.isOpen && (
        <div
          class={vnode.attrs.backdropDisabled ? 'modal.modal--backdropDisabled' : 'modal'}
          onclick={() => {
            this.close(vnode);
          }}
        >
          <div
            class="modal__content"
            style={vnode.attrs.style}
            onclick={(e) => {
              e.stopPropagation();
            }}
          >
            {!vnode.attrs.closeDisabled && (
              <IconButton
                icon={{ svg: { content: m.trust(xIcon) } }}
                events={{
                  onclick: () => {
                    this.close(vnode);
                  },
                }}
              />
            )}
            {vnode.attrs.header && (
              <div>
                {vnode.attrs.header}
                <div class="divider"></div>
              </div>
            )}
            <div>{vnode.attrs.content}</div>
            {vnode.attrs.footer && (
              <div>
                <div class="divider"></div>
                {vnode.attrs.footer}
              </div>
            )}
          </div>
        </div>
      )
    );
  }
}

module.exports = Modal;
