import React, { Component } from "react";
import "./TestPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class TestPage extends Component {
  constructor() {
    super();

    this.state = {
      itemsFromBackend: [
        { id: uuid(), content: "First task" },
        { id: uuid(), content: "Second task" },
        { id: uuid(), content: "Third task" }
      ]
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    console.log("before: ", this.state.itemsFromBackend);
    const items = reorder(
      this.state.itemsFromBackend,
      result.source.index,
      result.destination.index
    );

    this.setState({
      itemsFromBackend: items
    });

    console.log("after: ", this.state.itemsFromBackend);
  }

  render() {
    const items = this.state.itemsFromBackend;

    return (
      <div>
        <div className="test-header"></div>
        <div className="test-content">
          <div className="test-dnd">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightblue"
                          : "white",
                        padding: "4px",
                        width: "100%",
                        minHeight: "100%"
                      }}
                    >
                      {items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              className={
                                snapshot.isDragging
                                  ? "dnd-bar-avtive"
                                  : "dnd-bar"
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
                              <div className="dnd-bar-desination">
                                {item.content}
                              </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;
