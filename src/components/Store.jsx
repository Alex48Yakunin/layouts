import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

const data = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }
]
class  Store extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: data,
      icon: "view_list"
    }

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    let icon = this.state.icon === "view_list" ? "view_module" : "view_list";
    this.setState({ icon });
  }

  render() {
    return (
      <div className="store">
          <header className="store__header">
              <IconSwitch  icon={this.state.icon} onSwitch={this.onSwitch}/>
          </header>
          <main className="store__content">
          {this.state.icon === "view_list" ? <CardsView cards={this.products} /> : <ListView items={this.products} />}
          </main>
      </div>
    )
  }
}


export default Store;