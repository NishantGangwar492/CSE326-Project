import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../assets/icons/CartIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className='p-3'>
                <div className='d-flex align-items-center'>
                    <div className='me-1'>
                        <AccountCircleIcon style={{
                            fontSize: 48
                        }} />
                    </div>
                    <div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: 600
                        }}>
                            Nishant Gangwar
                        </div>
                        <div
                            style={{
                                fontSize: 12
                            }}
                        >
                            Welcome back, Sir!
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>New</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Dress</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Clothing</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Accessories</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Sale</div>
                    </div>
                </div>
                <hr style={{ width: '92.5%' }} />
                <div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>About Us</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Careers</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Contact Us</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Help</div>
                    </div>
                    <div style={{
                        padding: 4,
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                        <div>Threabare Cares</div>
                    </div>
                </div>
            </List>
        </Box>
    );

    return (
        <div className='py-1 d-flex align-items-center justify-content-between pe-3'>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}
                        style={{
                            paddingLeft: 0
                        }}
                    >
                        <MenuIcon style={{
                            color: "black",
                            fontSize: 24
                        }} />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
            <div className='logo text-center'>
                THREADBARE
            </div>
            <div>
                <Cart />
            </div>
        </div>
    );
}