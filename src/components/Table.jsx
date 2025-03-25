import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function TableUsers() {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    fontWeight: "bold",
  };

  const rowStyle = {
    padding: "20px",
    height: "50px",
    borderTop: "1px solid #ccc",
  };

  return (
    <Container fluid style={{ padding: 0, margin: 0 }}>
      {/* כותרת עמודות */}
      <Row style={{ margin: 0 }}>
        <Col style={{ backgroundColor: "#f8f8f8", ...rowStyle }}>
          <div style={flexContainerStyle}>
            <div>Teammate</div>
            <div>Assigned</div>
            <div>Closed</div>
          </div>
        </Col>
      </Row>

      {/* שורה 1 */}
      <Row style={{ margin: 0 }}>
        <Col style={{ backgroundColor: "#FFEBFC", ...rowStyle }}>
          <div style={flexContainerStyle}>
            <div>
              &#128100; <i>"amit"</i>
            </div>
            <div>29</div>
            <div>30</div>
          </div>
        </Col>
      </Row>

      {/* שורה 2 */}
      <Row style={{ margin: 0 }}>
        <Col style={{ backgroundColor: "#f0f0f0", ...rowStyle }}>
          <div style={flexContainerStyle}>
            <div>
              &#128100; <i>"matan"</i>
            </div>
            <div>34</div>
            <div>30</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
