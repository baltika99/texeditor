import React from "react";
import "./Editor.css";

export function Editor() {
  return (
    <div className="wrap">
      <textarea
        className="textarea"
        rows={20}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
