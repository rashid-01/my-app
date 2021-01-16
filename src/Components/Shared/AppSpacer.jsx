import React from "react";

function AppSpacer(size, horizontal) {
  return (
    <div
      style={{
        [horizontal ? "width" : "height"]: size
      }}
    ></div>
  );
}

AppSpacer.defaultProps = {
  size: 10,
  horizontal: false
};

export default AppSpacer;