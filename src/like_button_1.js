"use strict";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked 2nd component with jsx";
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

let domContainer = document.querySelector("#like_button_container_1");
ReactDOM.render(<LikeButton />, domContainer);
