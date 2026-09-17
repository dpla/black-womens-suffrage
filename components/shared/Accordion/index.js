import React from "react";

import css from "./Accordion.module.scss";

const addIcon = "/static/dpla-icons/add.svg";
const subtractIcon = "/static/dpla-icons/subtract.svg";

// Facet keys contain dots; keep DOM ids to a safe charset.
const UNSAFE_ID_CHARS = /[^\w-]/g;

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
    // Carry expand state by id, not array position. The API returns a fixed
    // facet set today, so positions happen to be stable -- but the search page
    // builds this list conditionally, and a positional copy would silently
    // attach one facet's state to another the day that stops holding.
    this.setState(state => ({
      items: this.props.items.map(item => {
        const previous = state.items.find(seen => seen.id === item.id);
        return Object.assign({}, item, {
          active: previous ? previous.active : item.active
        });
      })
    }));
  }

  onClickItem = id => {
    this.setState(state => ({
      items: state.items.map(
        item =>
          item.id === id
            ? Object.assign({}, item, { active: !item.active })
            : item
      )
    }));
  };

  render() {
    return (
      <ul>
        {this.state.items.map(item => {
          const panelId = `facets_${item.id.replace(UNSAFE_ID_CHARS, "-")}`;
          return (
            <li
              key={item.id}
              className={item.active ? css.active : css.inactive}
            >
                <button
                  className={css.itemHeader}
                  aria-controls={panelId}
                  aria-expanded={item.active}
                  onClick={() => this.onClickItem(item.id)}
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
                  <ul id={panelId} className={css.subitems}>
                    {item.subitems.map(subitem =>
                      <li key={subitem.id}>{subitem.content}</li>
                    )}
                  </ul>}
                {item.type === "date" &&
                  <div
                    id={panelId}
                    className={`${css.subitems} ${css.date}`}
                  >
                    {item.subitems}
                  </div>}
              </li>
          );
        })}
      </ul>
    );
  }
}

export default Accordion;
