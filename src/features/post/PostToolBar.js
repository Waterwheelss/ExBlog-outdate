import React from 'react'
import { withTheme } from 'styled-components'
import Box from '../../components/box'
import Button from '../../components/button'
import Flex from '../../components/flex'
import { Icon } from '../../components/Icon'

const PostToolBar = (props) => {
    return (
        <Flex bg={props.theme.lightDark} height="70px" justifyContent="space-between" alignItems="center">
            <Box>
                <Box ml="4rem">
                    <Icon />
                </Box>
            </Box>
            <Box>
                <Box mr="4rem">
                    <Button>
                        Save
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}

export default withTheme(PostToolBar)