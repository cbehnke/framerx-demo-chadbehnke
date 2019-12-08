import * as React from "react"
import styled, { ThemeProvider, css } from "styled-components"
import { TextStyles } from "../TextStyles"
import classNames from "classnames"
import theme from "../theme"
import { OpenSans, ATCArquette } from "../fonts"

export type Props = {
  content?: string
  color?: string
  preset?: string
  
  fontfamily?: string
  fontsize?: number
  lineheight?: number
  letterspacing?: number

  fontweight?: string
  italic?: boolean
  uppercase?: boolean
  alignment?: string

  width: number
  height: number
  style: any
}

export const Text: React.FC<Props> = ({
  children,
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <TextElement
      preset={props.preset}
      color={props.color}
      fontfamily={props.fontfamily}
      fontsize={props.fontsize}
      lineheight={props.fontsize}
      letterspacing={props.letterspacing}
      fontweight={props.fontweight}
      italic={props.italic}
      alignment={props.alignment}
      style={props.style}
      uppercase={props.uppercase}
      className={classNames(
        props.preset,
        props.fontweight,
        props.alignment,
        { italic: props.italic },
        { uppercase: props.uppercase }
      )}>
        <TextStyles />
        <OpenSans />
        <ATCArquette />
        {props.content || children}
    </TextElement>
  </ThemeProvider>
)

export const TextElement = styled.span`
  display: grid;
  width: 100%;
  height: auto;
  text-align: inherit;

  color: ${props => props.color};
`