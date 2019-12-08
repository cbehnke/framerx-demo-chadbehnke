import * as React from "react";
import * as System from "../../../system";
import { ControlType, addPropertyControls } from "framer";

export function Button(props) {
  return <System.Button {...props} />;
}

Button.defaultProps = {
  width: 91,
  height: 44,
  text: "Label",
  size: "medium",
  color: "light",
  variant: "fill",
  flow: "fidexWidth",
  disabled: false
};

addPropertyControls(Button, {
  text: {
    type: ControlType.String,
    title: "Label"
  },
  size: {
    type: ControlType.SegmentedEnum,
    title: "Size",
    options: ["small", "medium", "large"],
    optionTitles: ["S", "M", "L"]
  },
  color: {
    type: ControlType.Enum,
    title: "Color",
    options: ["light", "brand", "secondary", "error"],
    optionTitles: ["Light", "Brand", "Secondary", "Error"]
  },
  variant: {
    type: ControlType.Enum,
    title: "Variant",
    options: ["fill", "outline", "flat"],
    optionTitles: ["Fill", "Outline", "Flat"]
  },
  flow: {
    type: ControlType.SegmentedEnum,
    title: "Flow",
    options: ["fixedWidth", "fluid"],
    optionTitles: ["Fixed", "Fluid"]
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled"
  }
});
