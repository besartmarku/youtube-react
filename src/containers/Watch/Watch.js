import React from "react";
import "./Watch.scss";

import { bindActionCreators } from "redux";
import * as watchActions from "../../store/actions/watch";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";

import WatchContent from "./WatchContent/WatchContent";
import { getChannelId } from "../../store/reducers/videos";
import { getSearchParam } from "../../services/url";

export class Watch extends React.Component {
  getVideoId() {
    return getSearchParam(this.props.location, "v");
  }

  render() {
    const videoId = this.getVideoId();
    {
      return (
        <WatchContent videoId={videoId} channelId={this.props.channelId} />
      );
    }
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push("/");
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }
}

function mapStateToProps(state, props) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, "v")
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({ fetchWatchDetails }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Watch)
);
