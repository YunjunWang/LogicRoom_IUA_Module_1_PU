import * as React from "react";

import DownloadComponent from "./DownloadComponent";

const ModelComponent = (props) => {
  let { vm } = props;
  vm.hasApplyLink = !!vm.financeApplyLink;
  return (
    <>
      <h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{vm.modelName}
        {vm.hasApplyLink && <DownloadComponent vm={vm.financeApplyLink} />}
      </h4>
    </>
  );
};

export default ModelComponent;
