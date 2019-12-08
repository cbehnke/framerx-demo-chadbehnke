import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { transparentize } from "polished"
import theme from "../theme"
import { ATCArquette } from "../fonts"
import { Text } from "./Text"

export type Props = {
  text?: string
  size: string
  color: string
  variant: string
  flow: string
  disabled?: boolean
  customtheme: string
}

export const Button: React.FC<Props> = ({
  children,
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <StyledButton
      disabled={props.disabled ? "disabled" : ""}
      className={`
        ${props.flow}
        ${props.size}
        ${props.color}
        ${props.variant}`}>
      <ATCArquette />
        <Text preset={props.size == "small" ? "label-button-small" : "label-button-medium"} content={props.text || children} />
    </StyledButton>
  </ThemeProvider>
)

const StyledButton = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.header};

  border: 0 none;
  white-space: nowrap;
  cursor: pointer;

  margin: 0;

  transition: background-color .1s ease, color .1s ease;

  > * {
    position: relative;
    z-index: 3;
  }

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;

    z-index: 2;
    opacity: 0;
    content: "";

    transition: all .2s ease;
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      text-decoration: unset;
      box-shadow: none;

      &:before {
        left: 0;
        right: 0;
        opacity: 1;
        transition: all .2s ease;
      }
    }

    &:active {
      animation: pulse .2s;
      box-shadow: 0 0 0 1em ${transparentize(1,"#ffffff")};

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 ${props => transparentize(.6,props.theme.colors.primary[1])};
        }
      }
    }

    &.activeToggle {
      background: ${props => props.theme.colors.primary[0]};
      color: ${props => props.theme.colors.primary[2]};
      box-shadow: inset 0 -3px 0 ${props => props.theme.colors.primary[1]};

      &:hover:before {
        box-shadow: inset -3px 0 ${props => props.theme.colors.primary[2]};
      }
    }
  }

  &.small {
    padding: 4px 16px;
    margin-right: -.1em;
  }
  &.medium{
    padding: 12px 24px;
  }
  &.large{
    padding: 16px 32px;
  }

  &.outline {
    &.small {
      border-radius: 12px;
      &:before {
        border-radius: 12px;
      }
    }
    &.medium {
      border-radius: 24px;
      &:before {
        border-radius: 24px;
      }
    }
    &.large {
      border-radius: 28px;
      &:before {
        border-radius: 28px;
      }
    }
  }

  &.light {
    background-color: ${props => props.theme.buttons.light.mainColor};
    box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.light.shadowColor};
    color: ${props => props.theme.buttons.light.highlightColor};

    &:before { background-color: ${props => transparentize(.5, props.theme.buttons.light.shadowColor)}; }

    &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.light.shadowColor}; }
    &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.light.shadowColor}; }
    &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.light.shadowColor}; }

    &:not(:disabled):active {
      background-color: ${props => props.theme.buttons.light.activeColor};
      &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.light.activeColor}; }
      &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.light.activeColor}; }
      &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.light.activeColor}; }
    }

    &.flat,
    &.outline {
      color: ${props => props.theme.buttons.light.mainColor};
    }
    &.outline {
      box-shadow:
        inset 1px 0 0 ${props => props.theme.buttons.light.mainColor},
        inset 0 1px 0 ${props => props.theme.buttons.light.mainColor},
        inset -1px 0 0 ${props => props.theme.buttons.light.mainColor},
        inset 0 -1px 0 ${props => props.theme.buttons.light.mainColor};

      &:not(:disabled):hover {
        box-shadow:
          inset 1px 0 0 ${props => transparentize(1,props.theme.buttons.light.shadowColor)},
          inset 0 1px 0 ${props => transparentize(1,props.theme.buttons.light.shadowColor)},
          inset -1px 0 0 ${props => transparentize(1,props.theme.buttons.light.shadowColor)},
          inset 0 -1px 0 ${props => transparentize(1,props.theme.buttons.light.shadowColor)};
      }
    }
  }

  &.brand {
    background-color: ${props => props.theme.buttons.brand.mainColor};
    box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.brand.shadowColor};
    color: ${props => props.theme.buttons.brand.highlightColor};

    &:before { background-color: ${props => transparentize(.5,props.theme.buttons.brand.shadowColor)}; }

    &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.brand.shadowColor}; }
    &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.brand.shadowColor}; }
    &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.brand.shadowColor}; }

    &:not(:disabled):active {
      background-color: ${props => props.theme.buttons.brand.activeColor};
      &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.brand.activeColor}; }
      &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.brand.activeColor}; }
      &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.brand.activeColor}; }
    }

    &.flat,
    &.outline {
      color: ${props => props.theme.buttons.brand.mainColor};
    }
    &.outline {
      background-clip: content-box;
      box-shadow: none;
      box-shadow:
        inset 1px 0 0 ${props => props.theme.buttons.brand.mainColor},
        inset 0 1px 0 ${props => props.theme.buttons.brand.mainColor},
        inset -1px 0 0 ${props => props.theme.buttons.brand.mainColor},
        inset 0 -1px 0 ${props => props.theme.buttons.brand.mainColor};

      &:not(:disabled):hover {
        color: ${props => props.theme.buttons.brand.highlightColor};
        box-shadow:
          inset 1px 0 0 ${props => transparentize(.5,props.theme.buttons.brand.shadowColor)},
          inset 0 1px 0 ${props => transparentize(.5,props.theme.buttons.brand.shadowColor)},
          inset -1px 0 0 ${props => transparentize(.5,props.theme.buttons.brand.shadowColor)},
          inset 0 -1px 0 ${props => transparentize(.5,props.theme.buttons.brand.shadowColor)};
        
        &:before { background-color: ${props => props.theme.buttons.brand.shadowColor}; }
      }

      &:not(:disabled):active:before { background-color: ${props => props.theme.buttons.brand.activeColor}; }
    }
  }

  &.secondary {
    background-color: ${props => props.theme.buttons.secondary.mainColor};
    box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.secondary.shadowColor};
    color: ${props => props.theme.buttons.secondary.highlightColor};

    &:before { background-color: ${props => transparentize(.5,props.theme.buttons.secondary.shadowColor)}; }
    &:not(:disabled):active {
      background-color: ${props => props.theme.buttons.secondary.activeColor};

      &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.secondary.activeColor}; }
      &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.secondary.activeColor}; }
      &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.secondary.activeColor}; }
    }

    &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.secondary.shadowColor}; }
    &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.secondary.shadowColor}; }
    &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.secondary.shadowColor}; }

    &.flat,
    &.outline {
      color: ${props => props.theme.buttons.secondary.mainColor};
    }
    &.outline {
      box-shadow:
        inset 1px 0 0 ${props => props.theme.buttons.secondary.mainColor},
        inset 0 1px 0 ${props => props.theme.buttons.secondary.mainColor},
        inset -1px 0 0 ${props => props.theme.buttons.secondary.mainColor},
        inset 0 -1px 0 ${props => props.theme.buttons.secondary.mainColor};

      &:not(:disabled):hover {
        color: ${props => props.theme.buttons.secondary.highlightColor};
        box-shadow:
          inset 1px 0 0 ${props => transparentize(.5,props.theme.buttons.secondary.shadowColor)},
          inset 0 1px 0 ${props => transparentize(.5,props.theme.buttons.secondary.shadowColor)},
          inset -1px 0 0 ${props => transparentize(.5,props.theme.buttons.secondary.shadowColor)},
          inset 0 -1px 0 ${props => transparentize(.5,props.theme.buttons.secondary.shadowColor)};

        &:before { background-color: ${props => props.theme.buttons.secondary.shadowColor}; }
      }

      &:not(:disabled):active:before { background-color: ${props => props.theme.buttons.secondary.activeColor}; }
    }
  }

  &.error {
    background-color: ${props => props.theme.buttons.error.mainColor};
    box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.error.shadowColor};
    color: ${props => props.theme.buttons.error.highlightColor};

    &:before { background-color: ${props => transparentize(.5,props.theme.buttons.error.shadowColor)}; }
    &:not(:disabled):active {
      background-color: ${props => props.theme.buttons.error.activeColor};

      &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.error.activeColor}; }
      &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.error.activeColor}; }
      &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.error.activeColor}; }
    }

    &.small { box-shadow: inset 0 -1px 0 ${props => props.theme.buttons.error.shadowColor}; }
    &.medium { box-shadow: inset 0 -2px 0 ${props => props.theme.buttons.error.shadowColor}; }
    &.large { box-shadow: inset 0 -3px 0 ${props => props.theme.buttons.error.shadowColor}; }

    &.flat,
    &.outline {
      color: ${props => props.theme.buttons.error.mainColor};
    }
    &.outline {
      box-shadow:
        inset 1px 0 0 ${props => props.theme.buttons.error.mainColor},
        inset 0 1px 0 ${props => props.theme.buttons.error.mainColor},
        inset -1px 0 0 ${props => props.theme.buttons.error.mainColor},
        inset 0 -1px 0 ${props => props.theme.buttons.error.mainColor};

      &:not(:disabled):hover {
        color: ${props => props.theme.buttons.error.highlightColor};
        box-shadow:
          inset 1px 0 0 ${props => transparentize(.5,props.theme.buttons.error.shadowColor)},
          inset 0 1px 0 ${props => transparentize(.5,props.theme.buttons.error.shadowColor)},
          inset -1px 0 0 ${props => transparentize(.5,props.theme.buttons.error.shadowColor)},
          inset 0 -1px 0 ${props => transparentize(.5,props.theme.buttons.error.shadowColor)};

        &:before { background-color: ${props => props.theme.buttons.error.shadowColor}; }
      }
      &:not(:disabled):active:before { background-color: ${props => props.theme.buttons.error.activeColor}; }
    }
  }

  &.flat,
  &.outline {
    background: transparent;
  }

  &.flat {
    &.small,
    &.medium,
    &.large {
      box-shadow: none;
    }
  }

  &.fluid {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;
    opacity: .3;
  }
`