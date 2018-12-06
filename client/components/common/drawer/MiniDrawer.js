import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

const drawerWidth = 250;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: 'auto',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 120,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
});

const MiniDrawer = (props) => {

    let {navDrawerOpen} = props;
    const classes = props.classes;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
            }}
            open={navDrawerOpen}
        >
            <div className={classes.drawerHeader}/>
            <Divider />

            <div className={classes.root}>
                <Avatar alt="User" src="/img/default-user.png" className={classNames(classes.avatar, classes.bigAvatar)}/>
                <Typography component="p" className={classes.avatar}>
                    Admin
                </Typography>
            </div>


        </Drawer>
    )
};

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    navDrawerOpen: PropTypes.bool
};

export default withStyles(styles)(MiniDrawer)
