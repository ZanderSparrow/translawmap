import { Modal } from "react-bootstrap";
import stateLaws from "./data/stateLaws.json";
import "./StateModal.css";

const StateModal = ({ selectedState, showModal, setShowModal }) => {
    if (!selectedState) return null;
    const stateData = stateLaws[selectedState["abbr"]];

    return (
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="modern-modal"
      >
        <Modal.Header className="border-0 pb-0" closeButton>
          <Modal.Title className="w-100 text-center text-dark fw-bold">
            {selectedState["name"]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <div className="summary-box mb-3 p-3 rounded-3 text-white">
            <h6 className="mb-0 fw-semibold">{stateData.summary}</h6>
          </div>
          <div className="info-list">
            <div className="info-item py-2 border-bottom">
              <span className="fw-semibold text-dark">
                Gender Marker Change
              </span>
              <span className="text-muted">{stateData.genderMarker}</span>
            </div>
            <div className="info-item py-2 border-bottom">
              <span className="fw-semibold text-dark">'X' on State IDs</span>
              <span className="text-muted">{stateData.idX ? "Yes" : "No"}</span>
            </div>
            <div className="info-item py-2">
              <span className="fw-semibold text-dark">Hormone Access</span>
              <span className="text-muted">{stateData.hormones}</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

export default StateModal;