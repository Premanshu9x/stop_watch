import React, { Component } from 'react';
import { Card, Tabs } from "antd";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";
import Auxiliary from "../../util/Auxiliary";
import { ClockCircleOutlined, HourglassOutlined, GithubOutlined } from '@ant-design/icons';

const TabPane = Tabs.TabPane;

class HrTimer extends Component {
  render() {
    return (
      <Auxiliary>
        <Card title=<span className="Heading">Timer & Stop Watch</span>>
          <Tabs type="card" style={{color: "red"}}>
            <TabPane tab=<span><ClockCircleOutlined style={{color: "red"}} />Timer</span> key="timer">
              <Timer />
            </TabPane>
            <TabPane tab=<span><HourglassOutlined style={{color: "green"}} />Stopwatch</span> key="stopwatch">
              <Stopwatch />
            </TabPane>
          </Tabs>
        </Card>

      </Auxiliary>
    )
  }
}

export default HrTimer;
