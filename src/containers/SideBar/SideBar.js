import React from "react";
import { SideBarItem } from "./SideBarItem/SideBarItem";
import { SideBarHeader } from "./SideBarHeader/SideBarHeader";
import Subscriptions from "./Subscriptions/Subscriptions";
import { SideBarFooter } from "./SideBarFooter/SideBarFooter";

import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";

class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem path="/" label="Home" icon="home" />
        <SideBarItem path="/feed/trending" label="Trending" icon="fire" />
        <SideBarItem label="Followers" icon="spy" />
        <SideBarHeader title="Library" />
        <SideBarItem label="History" icon="history" />
        <Divider />
        <Subscriptions />
        <SideBarItem label="Watch later" icon="clock" />
        <SideBarItem label="Liked videos" icon="thumbs up" />
        <SideBarItem label="Movies and Shows" icon="film" />
        <Divider />
        <SideBarItem label="Report history" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        <Divider />
        <SideBarFooter />
      </Menu>
    );
  }
}

export default SideBar;
