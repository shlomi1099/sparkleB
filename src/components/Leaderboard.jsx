import React from "react";

const Leaderboard = () => {
  const users = [
    { rank: "2ND", name: "Nimi Martins", sales: 2300 },
    { rank: "3RD", name: "Yomi Ndu", sales: 2300 },
    { rank: "4TH", name: "Akin Siyanbola", sales: 2300 },
  ];

  return (
    <div className="card shadow rounded-4 p-4" style={{ width: "320px" }}>
      {/* כותרת עליונה */}
      <div className="text-uppercase text-muted small fw-semibold mb-3">Leaderboard</div>

      {/* מקום ראשון */}
      <div className="text-center">
        <h5 className="fw-bold text-primary">Most Sales</h5>

        {/* אייקון זוכה במקום תמונה */}
        <div
          className="mx-auto rounded-circle bg-warning d-flex align-items-center justify-content-center"
          style={{ width: "80px", height: "80px", fontSize: "32px", color: "white" }}
        >
          🏆
        </div>

        <h6 className="mt-2 fw-semibold">Sarah Martins</h6>
        <div className="text-primary fw-bold fs-4">50,000</div>
      </div>

      {/* מקומות 2–4 */}
      <div className="mt-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center bg-light rounded-pill px-3 py-2 mb-2"
          >
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold text-muted small">{user.rank}</span>
              <span className="small">{user.name}</span>
            </div>
            <span className="fw-semibold text-primary">{user.sales}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
