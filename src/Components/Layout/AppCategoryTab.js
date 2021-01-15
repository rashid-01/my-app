import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../../App.css";

const MenuItem = ({ text, selected, image }) => {
    console.log('jkkk', text, image)
    return <div style={{backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', textTransform:'uppercase'}} className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { category_name, category_image, category_id } = el;

    return <MenuItem text={category_name} key={category_id} selected={selected} image={category_image}/>;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class AppCategoryTab extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    scrollToSelected: false,
    selected: 185,
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  componentDidMount(){
      console.log(this.props)
      this.onSelect()
  }

//   onFirstItemVisible = () => {
//     console.log("first item is visible");
//   };

//   onLastItemVisible = () => {
//     console.log("last item is visible");

//     const newItems = Array(5)
//       .fill(1)
//       .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
//     list = list.concat(newItems);
//     this.menuItems = Menu(list, list.slice(-1)[0].name);
//     this.setState({
//       itemsCount: list.length,
//       selected: this.state.selected
//     });
//   };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = (key) => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
    this.props.onPress(key === undefined ? this.state.selected : key)
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('at tab', this.props)
    this.menu = null;
    this.menuItems = Menu(this.props.list.slice(0, this.props.list.length), this.state.selected);
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

//   setItemsCount = ev => {
//     const { itemsCount = list.length, selected } = this.state;
//     const val = +ev.target.value;
//     const itemsCountNew =
//       !isNaN(val) && val <= list.length && val >= 0
//         ? +ev.target.value
//         : list.length;
//     const itemsCountChanged = itemsCount !== itemsCountNew;

//     if (itemsCountChanged) {
//       this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
//       this.setState({
//         itemsCount: itemsCountNew
//       });
//     }
//   };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: value });
  };

  render() {
    const {
      clickWhenDrag,
      hideArrows,
      hideSingleArrow,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
        //   alignCenter={alignCenter}
        //   arrowLeft={ArrowLeft}
        //   arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={true}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
        //   onFirstItemVisible={this.onFirstItemVisible}
        //   onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />
        <div className="App">
          <h4>You selected:{selected}</h4>
        </div>
      </div>
    );
  }
}

export default AppCategoryTab;

