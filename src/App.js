import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  resetCounter = () => {
    const { counters } = this.state;
    counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
    console.log("counters", counters);
  };

  handleIncrement = counter => {
    const { counters } = this.state;
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    if (counter.value !== 0) {
      const { counters } = this.state;
      let index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        <Navbar totalCounters={counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            onReset={this.resetCounter}
            counters={counters}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
