import m from 'mithril';
import { MDCTextField } from '@material/textfield';
import { UUID } from '../../services';

class TextField {
  constructor() {
    this.randomId = 'u' + UUID.uuidv4().substring(0, 8);
  }

  oncreate() {
    // this.mdcInstance = new MDCTextField(document.getElementById(this.randomId));
  }

  view(vnode) {
    return (
      <>
        <label id={this.randomId} class="mdc-text-field mdc-text-field--filled">
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
