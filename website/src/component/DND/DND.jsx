import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";
import * as stepActions from "../../actions/stepActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CalendarRP } from "../Calendar";
import moment from "moment";
import "./DND.sass";

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
    this.handleDelete = this.handleDelete.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    for (let i = 0; i < this.props.cities.length; i++) {
      if (result.draggableId === this.props.cities[i].id) {
        var checkCity = this.props.cities[i].name;
        break;
      }
    }

    // First selected city cannot be the same as the home city
    if (result.destination.index === 0 && this.props.home.name === checkCity) {
      return this.props.updateError(`${checkCity} cannot be on top`);
    } else if (
      result.source.index === 0 &&
      this.props.cities.length > 1 &&
      this.props.home.name === this.props.cities[1].name
    ) {
      return this.props.updateError(
        `${this.props.cities[1].name} cannot be on top`
      );
    } else {
      var sortedCityLst = reorder(
        this.props.cities,
        result.source.index,
        result.destination.index
      );
      for (let i = 1; i < sortedCityLst.length; i++) {
        if (sortedCityLst[i - 1].name === sortedCityLst[i].name) {
          return this.props.updateError("repeated city");
        }
      }
      this.props.reorderCity(sortedCityLst);
    }
  }

  handleDelete(id) {
    let lastIdx = this.props.cities.length - 1;
    let itemIdx = this.props.cities.findIndex(city => {
      return city.id === id;
    });

    var hitLst = [id];

    if (itemIdx !== lastIdx) {
      if (itemIdx === 0 && this.props.cities[1].name === this.props.home.name) {
        hitLst.push(this.props.cities[1].id);
      } else if (
        this.props.cities[itemIdx - 1].name ===
        this.props.cities[itemIdx + 1].name
      ) {
        hitLst.push(this.props.cities[itemIdx + 1].id);
      }
    }
    this.props.deleteCity(hitLst);
  }

  render() {
    const items = this.props.cities;

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
                  <Draggable
                    id={item.id}
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="dnd-bar"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        onMouseOver={() => {
                          document.getElementById(item.id).style.display =
                            "initial";
                        }}
                        onMouseOut={() => {
                          document.getElementById(item.id).style.display =
                            "none";
                        }}
                      >
                        <div className="dnd-bar-delete">
                          <FontAwesomeIcon
                            id={item.id}
                            className="fa-bars"
                            icon={faTimes}
                            size="1x"
                            onClick={() => this.handleDelete(item.id)}
                          />
                        </div>

                        <div
                          className={
                            snapshot.isDragging
                              ? "dnd-bar-item-avtive"
                              : "dnd-bar-item"
                          }
                        >
                          <div
                            className="dnd-bar-handle"
                            {...provided.dragHandleProps}
                          >
                            <FontAwesomeIcon icon={faBars} size="1x" />
                          </div>
                          <div className="dnd-bar-content">{item.name}</div>
                          <div className="dnd-bar-dateselector">
                            <div className="dnd-bar-dec">---</div>
                            <div
                              className="dnd-bar-day"
                              onClick={() => {
                                document.getElementById(
                                  item.id + "calendar"
                                ).style.display = "initial";
                              }}
                            >
                              day
                            </div>
                            <div className="dnd-bar-inc">+++</div>
                          </div>
                        </div>

                        <div
                          id={item.id + "calendar"}
                          className="dnd-bar-calendar"
                        >
                          {/* <calendar id={item.id} /> onCloseHandlder={
                            document.getElementById(
                              item.id + "calendar"
                            ).style.display = "none";
                          } */}
                          <CalendarRP id={item.id + "calendar"} initialStartDate={moment()} />
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
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.plan[0].home,
    cities: state.step.cities
  };
};

const mapDispatchToProps = () => {
  return {
    reorderCity: stepActions.reorderCity,
    deleteCity: stepActions.deleteCity,
    updateError: stepActions.updateError
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(DND);
