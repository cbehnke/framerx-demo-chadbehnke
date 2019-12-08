import { css, createGlobalStyle } from "styled-components"

export const TextStyles = createGlobalStyle`
  .header-small {
    font-family: ${props => props.theme.fonts.header};
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: ${props => props.theme.lineHeights[1]};
    letter-spacing: ${props => props.theme.letterSpacings[2]}px;
    font-weight: 200;
  }

  .header-medium {
    font-family: ${props => props.theme.fonts.header};
    font-size: ${props => props.theme.fontSizes[6]}px;
    line-height: ${props => props.theme.lineHeights[2]};
    letter-spacing: ${props => props.theme.letterSpacings[2]}px;
    font-weight: 200;
  }

  .input-medium {
    font-family: ${props => props.theme.fonts.content};
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: ${props => props.theme.lineHeights[1]};
    letter-spacing: ${props => props.theme.letterSpacings[1]}px;
    font-weight: 500;
  }

  .header-large {
    font-family: ${props => props.theme.fonts.header};
    font-size: ${props => props.theme.fontSizes[7]}px;
    line-height: ${props => props.theme.lineHeights[1]};
    letter-spacing: ${props => props.theme.letterSpacings[1]}px;
    font-weight: 700;
  }
  
  .label-form {
    font-family: ${props => props.theme.fonts.content};
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: ${props => props.theme.lineHeights[3]};
    letter-spacing: ${props => props.theme.letterSpacings[2]}px;
  }

  .label-button-small {
    font-family: ${props => props.theme.fonts.content};
    font-size: ${props => props.theme.fontSizes[1]}px;
    line-height: ${props => props.theme.lineHeights[2]};
    letter-spacing: ${props => props.theme.letterSpacings[4]}px;
    font-weight: 400;
  }

  .label-button-medium {   
    font-family: ${props => props.theme.fonts.content};
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: ${props => props.theme.lineHeights[2]};
    letter-spacing: ${props => props.theme.letterSpacings[5]}px;
    font-weight: 400;
  }

  .content-small {
    font-family: ${props => props.theme.fonts.content};
    font-size: ${props => props.theme.fontSizes[1]}px;
    line-height: ${props => props.theme.lineHeights[2]};
    letter-spacing: ${props => props.theme.letterSpacings[1]}px;
  }

  .content-medium {
    font-family: ${props => props.theme.fonts.content};
    font-size: ${props => props.theme.fontSizes[2]}px;
    line-height: ${props => props.theme.lineHeights[4]};
    letter-spacing: ${props => props.theme.letterSpacings[1]}px;
  }

  ${props => props.preset == "custom" && css`
    font-family: ${props => props.theme.fonts.content};

    ${props => props.fontfamily == "header" && css`
      font-family: ${props => props.theme.fonts.header};
    `}
  
    font-size: ${props => props.theme.fontSizes[parseInt(props.fontsize)]}px;
    line-height: ${props => props.theme.lineHeights[parseInt(props.lineheight)]};
    letter-spacing: ${props => props.theme.letterSpacings[parseInt(props.letterspacing)]}px;
  `}

  .light {
    font-weight: 100;
  }

  .bold {
    font-weight: 700;    
  }

  .italic {
    font-style: italic;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .left {
    text-align: left;
    justify-content: start;
  }

  .center {
    text-align: center;
    justify-content: center;
  }

  .right {
    text-align: right;
    justify-content: end;
  }
`