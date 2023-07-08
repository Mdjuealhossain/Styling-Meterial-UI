
import React from "react";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const ListMui = () => {
    return (
        <nav aria-label="main mailbox folders">
            <List  subheader="Md Jueal Hossain">
                <ListItem secondaryAction>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox"></ListItemText>
                    </ListItemButton>
                </ListItem>
              
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Draft"></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    )
}


export default ListMui