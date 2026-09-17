import React from "react";

import css from "./Accordion.module.scss";

const addIcon = "/static/dpla-icons/add.svg";
const subtractIcon = "/static/dpla-icons/subtract.svg";

class Accordion extends React.Component {
  // Starts every item expanded so the server-rendered HTML ships with the facet
  // content present and aria-expanded="true" -- readable without JS. The
  // componentDidMount below collapses to the real props after hydration.
  state = {
    items: this.props.items.map(item => Object.assign({}, item, { active: true }))
  };

  componentDidMount() {
    // now collapse accordions for realz
    this.setState((state, props) => ({ items: props.items }));
  }

  componentDidUpdate(prevProps) {
    // Load-bearing, not an optimisation: the setState below re-enters this
    // method, and on a state-only update React passes the same props object, so
    // this identity check is the only thing terminating the loop.
    if (prevProps.items === this.props.items) return;
    // Carries active flags across by array position, which is only right while
    // the facet list keeps its order -- see the follow-up issue on index keys.
    // The fallback guards a longer incoming list, which used to index past the
    // end and throw.
    this.setState(state => ({
      items: this.props.items.map((item, i) =>
        Object.assign({}, item, { active: (state.items[i] || item).active })
      )
    }));
  }

  onClickItem = index => {
    const { items } = this.state;
    const newItemsArray = items.map((item, i) => {
      if (i === index) {
        return Object.assign({}, item, { active: !item.active });
      } else {
        return item;
      }
    });
    this.setState({ items: newItemsArray });
  };

  render() {
    return (
      <ul>
        {this.state.items.map((item, i) => {
          if (
            (item.type === "term" && item.subitems.length) ||
            item.type === "date"
          ) {
            return (
              <li key={i} className={item.active ? css.active : css.inactive}>
                <button
                  className={css.itemHeader}
                  aria-controls={`facets_${i}`}
                  aria-expanded={item.active}
                  onClick={() => this.onClickItem(i)}
                >
                  <h3>{item.name}</h3>
                  {item.active &&
                    <img
                      src={subtractIcon}
                      alt=""
                      className={css.subtractIcon}
                    />}
                  {!item.active &&
                    <img src={addIcon} alt="" className={css.addIcon} />}
                </button>
                {item.type === "term" &&
                  <ul id={`facets_${i}`} className={css.subitems}>
                    {item.subitems.map((subitem, j) =>
                      <li key={j}>{subitem.content}</li>
                    )}
                  </ul>}
                {item.type === "date" &&
                  <div
                    id={`facets_${i}`}
                    className={`${css.subitems} ${css.date}`}
                  >
                    {item.subitems}
                  </div>}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default Accordion;
