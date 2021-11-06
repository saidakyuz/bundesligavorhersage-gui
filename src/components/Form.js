import { useState } from "react";
import Spinner from "./Spinner";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import dummyLogo from "../docs/dummy.png";

function Form({ data }) {
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState();
  const [logoUrl1, setLogoUrl1] = useState(dummyLogo);
  const [logoUrl2, setLogoUrl2] = useState(dummyLogo);
  var optionsList = [];

  /* assign names into optionsList*/

  function fillOptionsList() {
    // window.setTimeout(5000);
    data.forEach(function (e) {
      optionsList.push({
        label: e.name,
        value: e.name,
        logo: e.logo,
      });
    });
  }
  fillOptionsList();

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
    console.log("selected value = ", selectedValue);
  };

  const handleLogoChange1 = (e) => {
    setLogoUrl1(e.logo);
  };
  const handleLogoChange2 = (e) => {
    setLogoUrl2(e.logo);
  };

  const handleSubmit = () => {};
  console.log(data);
  console.log("OptionsList", optionsList);

  return data ? (
    <div className="form-submit">
      <div className="form">
        {/* <Select data={data} /> */}
        <div className="team">
          <img
            className="teamLogo"
            src={logoUrl1}
            alt="First Team Logo"
            width="200"
            height="200"
          />
          <Select
            className="selectBox"
            placeholder="Select First Team"
            value={optionsList.find((obj) => obj.value === selectedValue)}
            options={optionsList}
            onChange={(handleChange, handleLogoChange1)}
          />
        </div>
        <div className="team">
          <img
            className="teamLogo"
            src={logoUrl2}
            alt="First Team Logo"
            width="200"
            height="200"
          />
          <Select
            className="selectBox"
            placeholder="Select Second Team"
            value={optionsList.find((obj) => obj.value === selectedValue)}
            options={optionsList}
            onChange={(handleChange, handleLogoChange2)}
          />
        </div>
      </div>
      <Button variant="outline-light" size="lg" onClick={handleSubmit}>
        VS
      </Button>
    </div>
  ) : (
    <div>
      <Spinner />
    </div>
  );
}

export default Form;
