import * as React from "react"
import * as System from "../../../system"
import { ControlType, addPropertyControls } from "framer"

export function Text(props) {
  return <System.Text {...props} />
}

Text.defaultProps = {
  content: "Insert content",
  preset: "header-small",
  color: "black",
  fontweight: "regular",
  italic: false,
  uppercase: false,
  alignment: "left",
  width: 115,
  height: 25
}

addPropertyControls(Text, {
  content: {
    type: ControlType.String,
    title: "Content"
  },
  color: {
    type: ControlType.Color,
    title: "Color"
  },
  preset: {
    type: ControlType.Enum,
    title: "Preset",
    options: [
      "header-small",
      "header-medium",
      "header-large",
      "label-form",
      "label-button-small",
      "label-button-medium",
      "content-small",
      "content-medium",
      "custom"
    ],
    optionTitles: [
      "Small Header",
      "Medium Header",
      "Large Header",
      "Form Label",
      "Small Button Label",
      "Medium Button Label",
      "Small Content",
      "Medium Content",
      "Custom"
    ]
  },
  fontfamily: {
    type: ControlType.Enum,
    title: "Font Family",
    options: [
      "header",
      "body"
    ],
    optionTitles: [
      "Header",
      "Body"
    ],
    hidden(props) {
      return !(props.preset == "custom")
    }
  },
  fontsize: {
    type: ControlType.Enum,
    title: "Font Size",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    optionTitles: [
      "10",
      "12",
      "14",
      "16",
      "24",
      "48"
    ],
    hidden(props) {
      return !(props.preset == "custom")
    }
  },
  lineheight: {
    type: ControlType.Enum,
    title: "Line Height",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    optionTitles: [
      "0",
      "1",
      "1.2",
      "1.4",
      "1.6",
      "1.8",
      "2"
    ],
    hidden(props) {
      return !(props.preset == "custom")
    }
  },
  letterspacing: {
    type: ControlType.Enum,
    title: "Letter Spacing",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    optionTitles: [
      ".2",
      ".4",
      ".6", 
      ".8",
      "1",
      "2"
    ],
    hidden(props) {
      return !(props.preset == "custom")
    }
  },
  fontweight: {
    type: ControlType.Enum,
    title: "Font Weight",
    options: [
      "light",
      "regular",
      "bold"
    ],
    optionTitles: [
      "Light",
      "Regular",
      "Bold"
    ]
  },
  italic: {
    type: ControlType.Boolean,
    title: "Italic"
  },
  uppercase: {
    type: ControlType.Boolean,
    title: "Uppercase"
  },
  alignment: {
    type: ControlType.Enum,
    title: "Alignment",
    displaySegmentedControl: true,
    options: [
      "left",
      "center",
      "right"
    ],
    optionTitles: [
      "Left",
      "Center",
      "Right"
    ]
  }
})