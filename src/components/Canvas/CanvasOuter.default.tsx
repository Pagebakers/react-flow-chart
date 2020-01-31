import styled from 'styled-components'
import { IConfig } from '../../types'

export interface ICanvasOuterDefaultProps {
  config: IConfig
  children: any
  ref?: React.Ref<any>
}

export const CanvasOuterDefault = styled.div<ICanvasOuterDefaultProps>`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: not-allowed;
` as any
