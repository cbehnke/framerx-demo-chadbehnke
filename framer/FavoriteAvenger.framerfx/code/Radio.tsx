import * as React from "react"
import * as System from "../../../system"
import { ControlType, addPropertyControls } from "framer"

export function Radio(props) {
  return <System.Radio {...props} />
}

Radio.defaultProps = {
  width: 16,
  height: 24,
  label: false,
  text: 'Label',
  colortheme: 'default',
  checked: false,
  disabled: false
}

addPropertyControls(Radio, {
  colortheme: {
    type: ControlType.SegmentedEnum,
    title: "Theme",
    options: ["default","mono"]
  },
  checked: {
    type: ControlType.Boolean,
    title: "Checked"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled"
  },
  label: {
    type: ControlType.Boolean,
    title: "Include Label"
  },
  text: {
    type: ControlType.String,
    title: "Label Text",
    hidden(props) {
      return props.label === false
    }
  },
  name: {
    type: ControlType.String,
    title: "Group Name"
  }
})