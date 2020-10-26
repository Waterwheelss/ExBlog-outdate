import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import Box from '../../components/box'
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '../../components/button'
import IconButton from '../../components/iconButton'
import Flex from '../../components/flex'
import { Icon } from '../../components/Icon'
import { withTheme } from 'styled-components'
import Drawer from '../../components/drawer';

const PostEditor = (props) => {
    const [html, setHtml] = useState('')
    const [drawerOpen, setDrawerOpen] = useState(false)
    console.log(drawerOpen)

    const mdParser = new MarkdownIt();
    return (
        <Box>
            <Flex bg={props.theme.lightDark} height="70px" justifyContent="space-between" alignItems="center" borderBottom={`solid 1px ${props.theme.dark}`}>
                <Box>
                    <Box ml="4rem">
                        <Icon />
                    </Box>
                </Box>
                <Box>
                    <Flex alignItems="center" mr="4rem">
                        <Box mr="1rem">
                            <Button>
                                Save
                            </Button>
                        </Box>
                        <Box>
                            <IconButton onClick={() => { setDrawerOpen(!drawerOpen) }} active={drawerOpen}>
                                <SettingsIcon />
                            </IconButton>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box position="relative">
                <MdEditor
                    style={{ height: "calc(100vh - 70px)" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={({ html }) => setHtml(html)}
                    placeholder="Start to note here"
                />
                <Drawer open={drawerOpen}/>
            </Box>
        </Box>
    )
}

export default withTheme(PostEditor)