import m from 'mithril';
import { MDCRipple } from '@material/ripple/index';
import './button.scss';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

class Button {
  constructor() {
    this.randomId = 'u' + uuidv4().substring(0, 8);
    this.buttonClass = `${this.randomId} mdc-button`;
    this.optionDefaults = {
      outlined: false,
      raised: false,
      ripple: true,
      label: '',
      iconLeading: null,
      iconTrailing: null,
      onclick: null,
    };
    this.options = null;
    this.mdcRipple = null;
  }

  oninit(vnode) {
    this.options = Object.assign({}, this.optionDefaults, {
      outlined: vnode.attrs.outlined,
      raised: vnode.attrs.raised,
      ripple: vnode.attrs.ripple,
      label: vnode.attrs.label,
      iconLeading: vnode.attrs.iconLeading,
      iconTrailing: vnode.attrs.iconTrailing,
      onclick: vnode.attrs.onclick,
    });
    if (this.options.raised) {
      this.buttonClass += ' mdc-button--raised';
    }
    if (this.options.outlined) {
      this.buttonClass += ' mdc-button--outlined';
    }
    if (this.options.iconLeading) {
      this.buttonClass += ' mdc-button--icon-leading';
    }
    if (this.options.iconTrailing) {
      this.buttonClass += ' mdc-button--icon-trailing';
    }
  }

  oncreate(vnode) {
    if (this.options.ripple) {
      this.mdcRipple = new MDCRipple(document.querySelector(`#${this.randomId}`));
    }
  }

  view(vnode) {
    return (
      <button id={this.randomId} class={this.buttonClass} onclick={this.options.onclick}>
        <div class="mdc-button__ripple"></div>
        {this.options.iconLeading && (
          <div class="mdc-button__icon">
            <span class="material-icons md-18">{this.options.iconLeading}</span>
          </div>
        )}
        <span class="mdc-button__label">{this.options.label}</span>
        {this.options.iconTrailing && (
          <div class="mdc-button__icon">
            <span class="material-icons md-18">{this.options.iconTrailing}</span>
          </div>
        )}
      </button>
    );
  }
}

module.exports = Button;
