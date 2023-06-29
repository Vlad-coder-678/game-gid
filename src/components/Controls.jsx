import React from "react";
import SelectOrderingBy from "./SelectOrderingBy";
import SelectReleaseDate from "./SelectReleaseDate";
import SelectPlatforms from "./SelectPlatforms";

const Controls = () => (
  <div>
    <SelectOrderingBy />
    <SelectReleaseDate />
    <SelectPlatforms />
  </div>
);

export default Controls;
