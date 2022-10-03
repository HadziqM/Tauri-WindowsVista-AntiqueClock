import * as React from "react";

interface TitleProps {}

interface TitleState {}

class Title extends React.Component<TitleProps, TitleState> {
  render() {
    return <div data-tauri-drag-region className="titlebar"></div>;
  }
}

export default Title;
