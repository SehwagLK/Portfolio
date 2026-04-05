import React from "react";
import { Row } from "react-bootstrap";

function Leetcode() {
  return (
    <Row
      style={{
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: "20px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4">
        My <strong className="purple">LeetCode Stats</strong>
      </h1>

      {/* 🔥 LeetCode Stats Card */}
      <img
        src="https://leetcard.jacoblin.cool/sehwag_lk?theme=dark&font=Baloo&ext=heatmap"
        alt="LeetCode Stats"
        style={{ maxWidth: "100%", borderRadius: "10px" }}
      />
    </Row>
  );
}

export default Leetcode;