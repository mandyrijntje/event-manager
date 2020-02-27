import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
//
class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents(); //invoke the action creator loadEvents (and dispatch the result)
  }
  render() {
    return <EventsList events={this.props.events} />;
    //our reducer 'events' retrieves either null or an array of events
    //EventsList just renders with the available events (they could be null)
  }
}
const mapStateToProps = state => ({
  //connect to the events part of the state
  events: state.events
});
export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
