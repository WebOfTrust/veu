import m from 'mithril';
import { MDCTextField } from '@material/textfield';

class TextField {
  constructor() {}

  oncreate() {
    this.mdcInstance = new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  view(vnode) {
    return (
      <>
        <label class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <span class="mdc-floating-label" id={vnode.attrs.labelId}>
            {vnode.attrs.label}
          </span>
          <input
            class="mdc-text-field__input"
            type="text"
            placeholder={vnode.attrs.placeholder}
            aria-labelledby={vnode.attrs.labelId}
            oninput={(e) => {
              vnode.attrs.oninput(e);
            }}
          />
          <span class="mdc-line-ripple"></span>
        </label>
      </>
    );
  }
}

module.exports = TextField;
