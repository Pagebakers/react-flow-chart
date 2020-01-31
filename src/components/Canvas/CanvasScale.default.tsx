import styled, {css} from 'styled-components'

export interface ICanvasScaleDefaultProps {
  children: any
  scale?: number
}

export const CanvasScaleDefault = styled.div<ICanvasScaleDefaultProps>`
  position: relative;
  background-size: 20px 20px;
  background-color: rgba(0,0,0,0.08);
  background-image:
    linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),
    linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);
  transform-origin: top left;
  ${props => props.scale && css`
    transform: scale(${props.scale})
  `}
` as any
