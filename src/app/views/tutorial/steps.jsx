import m from 'mithril';

class Steps {
  constructor() {}

  view(vnode) {
    return (
      <>
        <div class="steps">
          {[...Array(vnode.attrs.count)].map((s, idx) => {
            return (
              <div
                class={'step' + (idx === vnode.attrs.selected ? ' step--selected' : '')}
                style={{ cursor: 'pointer' }}
                onclick={() => {
                  vnode.attrs.selectedChange(idx);
                }}
              ></div>
            );
          })}
        </div>
      </>
    );
  }
}

module.exports = Steps;
