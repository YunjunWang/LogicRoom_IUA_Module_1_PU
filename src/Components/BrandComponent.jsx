import * as React from "react";
import ModelComponent from "./ModelComponent";

const BrandComponent = (props) => {
  const { vm } = props;
  return (
    <>
      <h3>{vm.title}</h3>
      {vm.models.map((modelVm) => {
        return <ModelComponent vm={modelVm} />;
      })}
    </>
  );
};

export default BrandComponent;
