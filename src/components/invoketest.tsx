import * as React from "react";
import { invoke } from "@tauri-apps/api/tauri";

interface InvokeProps {}

interface InvokeState {}

class Invoke extends React.Component<InvokeProps, InvokeState> {
  state = { name: "dunno" };

  async invoked() {
    const data = await invoke("greet", { name: "me" });
    console.log(data);
    this.setState({ name: "hmmm" });
    console.log(this.state.name);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.invoked()}>Hello</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Invoke;
