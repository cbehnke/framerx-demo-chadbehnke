import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../theme"
import { lighten } from "polished"
import classNames from "classnames"
import { Text } from "./Text"

export type Props = {
  colortheme: string
  label: boolean
  text?: string
  checked: boolean
  disabled: boolean
  name: string
}

export const Radio: React.FC<Props> = ({
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <RadioContainer>
      <RadioElement
        className={classNames({'mono': props.colortheme === "mono"})}
        name={props.name}
        value={props.text}
        onChange={function(){}}
        checked={props.checked ? 'checked' : '' }
        disabled={props.disabled ? 'disabled' : '' } />
      {props.label && (
        <RadioLabel
          className={classNames({'mono': props.colortheme === "mono"})}
          htmlFor={RadioElement}>
          <Text preset={"label-form"} content={props.text} />
        </RadioLabel>
      )}
    </RadioContainer>   
  </ThemeProvider>
)

const RadioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  overflow: hidden;
  opacity: ${props => props.theme.disabled ? .3 : 1}
`

const RadioElement = styled.input.attrs({
  type: 'radio'
})`
  position: relative;
  appearance: none;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.primary[0]};
  border-radius: 50%;

  &.mono {
    border-color: ${lighten(.85,'#000000')};
  }

  &:checked {
    border-color: ${props => props.theme.colors.primary[1]};
    border-style: solid;
    border-width: 2px;

    &:before {
      background: ${props => props.theme.colors.primary[1]};
      content: "";
      position: absolute;
      z-index: 2;
      width: 60%;
      height: 60%;
      top: 50%;
      left: 50%;
      margin-top: -30%;
      margin-left: -30%;
      border-radius: 50%;
    }
  }

  &:disabled,
  &:disabled ~ label {
    opacity: .3;
    pointer-events: none;
  }
`

const RadioLabel = styled.label`
  width: 100%;
  display: flex;
  text-align: left;
  align-self: center;
  color: ${props => props.theme.colors.primary[2]};
  margin-left: ${props => props.theme.space[2]}px;

  &.mono {
    color: black;
  }
`
