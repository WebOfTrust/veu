import m from 'mithril';
import IconButton from '../icon-button/icon-button.jsx';
import './modal.scss';

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
                icon="close"
                onclick={() => {
                  this.close(vnode);
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
