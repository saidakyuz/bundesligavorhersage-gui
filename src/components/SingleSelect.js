import React, { Component, Fragment } from "react";

import Select from "react-select";
import { colourOptions } from "../docs/data";

function SingleSelect({ data }) {
  console.log("data in Select", data[0].name);

  console.log(data.map((a) => a.name));
  return (
    <Fragment>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={data[0].name}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="color"
        options={data.map((a) => a.name)}
      />
    </Fragment>
  );
}

export default SingleSelect;
