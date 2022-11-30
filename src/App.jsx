import "./styles.css";
import * as React from "react";
import BrandComponent from "./Components/BrandComponent";

const App = (props) => {
  const data = {
    brand: [
      {
        name: "Tesla",
        financeLengthInMonths: 24,
        models: [
          {
            modelName: "Roadster",
            features: [{ name: "coupe" }, { name: "autopilot" }]
          },
          {
            modelName: "Model X",
            features: [{ name: "gull wing doors" }]
          },
          {
            modelName: "Cyber Truck",
            features: [{ name: "exoskeleton" }],
            financeApplyLink: "http://finance.com/apply"
          }
        ]
      },
      {
        name: "Ford",
        financeLengthInMonths: 36,
        models: [
          {
            modelName: "Petrol Mustang",
            features: [{ name: "fuel guage" }]
          },
          {
            modelName: "Electric Mustang",
            features: [
              { name: "electric charging point" },
              { name: "battery" }
            ],
            financeApplyLink: "http://finance.com/apply"
          },
          {
            modelName: "Petrol Mustang",
            features: []
          }
        ]
      },
      {
        name: "Peugeot",
        financeLengthInMonths: 0,
        models: [
          {
            modelName: "208",
            features: [{ name: "alloys wheels" }]
          },
          {
            modelName: "508 Hybrid",
            features: [
              { name: "electric charging point" },
              { name: "battery" },
              { name: "fuel guage" }
            ]
          }
        ]
      }
    ]
  };

  // create a viewmodel here
  const vm = {
    brand: []
  };

  data.brand.forEach((brand) => {
    const text =
      brand.financeLengthInMonths > 0 ? "(has finance)" : "(has no finance)";
    const brandVm = {
      title:
        brand.name + " has " + brand.models.length + " cars available " + text,
      models: brand.models,
      features: brand.models.map((model) =>
        model.features.map((feature) => feature.name)
      )
    };

    vm.brand.push(brandVm);
  });

  return (
    <>
      {vm.brand.map((brandVm) => {
        return <BrandComponent vm={brandVm} />;
      })}
    </>
  );
};

export default App;
