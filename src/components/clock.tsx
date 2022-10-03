import * as React from "react";

interface ClockProps {}

interface ClockState {}

class Clock extends React.Component<ClockProps, ClockState> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     second: { transform: "rotateZ(0deg)" },
  //     minute: { transform: "rotateZ(0deg)" },
  //     hour: { transform: "rotateZ(0deg)" },
  //   };
  // }
  state = {
    second: { transform: "rotateZ(0deg)" },
    minute: { transform: "rotateZ(0deg)" },
    hour: { transform: "rotateZ(0deg)" },
  };

  interval = setInterval(() => this.newday(), 1000);
  componentDidMount() {
    this.interval = setInterval(() => this.newday(), 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  newday = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    this.setState({
      hour: { transform: "rotateZ(" + (hh % 12) + "deg)" },
      minute: { transform: "rotateZ(" + mm + "deg)" },
      second: { transform: "rotateZ(" + ss + "deg)" },
    });
  };
  render() {
    return (
      <div className="container">
        <div className="background"></div>
        <div className="clock">
          <div className="background3"></div>
          <div className="background2"></div>

          <div className="circle st1" style={this.state.second}>
            <i style={{ background: "#04fc43" }}></i>
          </div>
          <div className="circle circle2 st2" style={this.state.minute}>
            <i style={{ background: "#fee800" }}></i>
          </div>
          <div className="circle circle3 st3" style={this.state.hour}>
            <i style={{ background: "#ff2972" }}></i>
          </div>

          <span style={{ transform: "rotate(30deg)" }}>
            <b style={{ transform: "rotate(-30deg)" }}>۱</b>
          </span>
          <span style={{ transform: "rotate(60deg)" }}>
            <b style={{ transform: "rotate(-60deg)" }}>۲</b>
          </span>
          <span style={{ transform: "rotate(90deg)" }}>
            <b style={{ transform: "rotate(-90deg)" }}>۳</b>
          </span>
          <span style={{ transform: "rotate(120deg)" }}>
            <b style={{ transform: "rotate(-120deg)" }}>۴</b>
          </span>
          <span style={{ transform: "rotate(150deg)" }}>
            <b style={{ transform: "rotate(-150deg)" }}>۵</b>
          </span>
          <span style={{ transform: "rotate(180deg)" }}>
            <b style={{ transform: "rotate(-180deg)" }}>۶</b>
          </span>
          <span style={{ transform: "rotate(210deg)" }}>
            <b style={{ transform: "rotate(-210deg)" }}>۷</b>
          </span>
          <span style={{ transform: "rotate(240deg)" }}>
            <b style={{ transform: "rotate(-240deg)" }}>۸</b>
          </span>
          <span style={{ transform: "rotate(270deg)" }}>
            <b style={{ transform: "rotate(-270deg)" }}>۹</b>
          </span>
          <span style={{ transform: "rotate(300deg)" }}>
            <b style={{ transform: "rotate(-300deg)" }}>۱۰</b>
          </span>
          <span style={{ transform: "rotate(330deg)" }}>
            <b style={{ transform: "rotate(-330deg)" }}>۱۱</b>
          </span>
          <span style={{ transform: "rotate(360deg)" }}>
            <b style={{ transform: "rotate(-360deg)" }}>۱۲</b>
          </span>
        </div>
      </div>
    );
  }
}

export default Clock;