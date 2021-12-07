import m from 'mithril';
import './icon-button.scss';

class IconButton {
  constructor() {
    this.buttonClass = `material-icons mdc-icon-button`;
    this.optionDefaults = {
      icon: '',
      ariaLabel: '',
      onclick: null,
    };
    this.options = null;
    this.mdcRipple = null;
  }

  oninit(vnode) {
    this.options = Object.assign({}, this.optionDefaults, {
      icon: vnode.attrs.icon,
      ariaLabel: vnode.attrs.ariaLabel,
      onclick: vnode.attrs.onclick,
    });
  }

  oncreate(vnode) {
    if (this.options.ripple) {
      this.mdcRipple = new MDCRipple(document.querySelector(`#${this.randomId}`));
    }
  }

  view(vnode) {
    return (
      <button class={this.buttonClass} onclick={this.options.onclick} aria-label={this.options.ariaLabel}>
        {this.options.icon}
      </button>
    );
  }
}

module.exports = IconButton;
