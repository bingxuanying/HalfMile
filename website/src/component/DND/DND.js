import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";
import * as stepActions from "../../actions/stepActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./DND.css";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class DND extends Component {
  constructor() {
    super();

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    this.props.reorderCity(result.source.index, result.destination.index);
  }

  render() {
    const items = this.props.cities;
    console.log(items);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "2px"
                }}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={
                          snapshot.isDragging ? "dnd-bar-avtive" : "dnd-bar"
                        }
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div
                          className="dnd-bar-handle"
                          {...provided.dragHandleProps}
                        >
                          <FontAwesomeIcon
                            icon={faBars}
                            size="1x"
                          ></FontAwesomeIcon>
                        </div>
                        <div className="dnd-bar-desination">{item.name}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    cities: state.step.cities
  };
};

const mapDispatchToProps = () => {
  return {
    reorderCity: stepActions.reorderCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(DND);
