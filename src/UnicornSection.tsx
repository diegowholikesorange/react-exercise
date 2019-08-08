import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/Inbox';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

interface UnicornSectionProps {
    title: string
    unicorns: string[]
}

const unicornSection: React.FC<UnicornSectionProps> = (props)  => {

    const classes = styles();

    return(
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="unicorn-header"
            >
                <Typography className={classes.heading}>{props.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List component="nav" aria-label="main mailbox folders">

                    {props.unicorns.map((unicorn) =>
                        <ListItem button key={unicorn}>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={unicorn} />
                        </ListItem>
                    )}

                </List>

            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

};
export default unicornSection;
