import React, { Component, useState } from "react";
import SearchBar from "../SearchBar/SearchBarLoca";
import DND from "../DND/DND";
import "./LocationBox.css";
import Calendar from "../Calender/Calender";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Modal } from "react-bootstrap";


// class LocationBox extends Component {


//   render() {
//     return (
//       <div className="locationbox-container">
//         <div
//           style={{
//             padding: "2px"
//           }}
//         >
//           <SearchBar />
//           <button>+</button>
//         </div>
//         <div className="locationbox-manager">
//           <DND />
          
//         </div>
//       </div>
//     );
//   }
// }

function LocationBox(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="locationbox-container">
        <div
          style={{
            padding: "2px"
          }}
        >
          <SearchBar />
          <button onClick={handleShow}>+</button>
          <Modal show={show} onHide={handleClose}>
            <Calendar />
          </Modal>
        </div>
        <div className="locationbox-manager">
          <DND />
          
        </div>
      </div>
  );
}

export default LocationBox;
