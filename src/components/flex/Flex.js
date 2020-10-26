import styled from 'styled-components'
import { flexbox, layout, color, space, border } from 'styled-system'

const Flex = styled.div`
    display: flex;
    ${flexbox}
    ${space}
    ${color}
    ${layout}
    ${border}
`

export default Flex