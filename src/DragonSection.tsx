import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bundle from './Bundle';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import './DragonSection.scss';

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

export interface DragonModel {
    totalNumberOfHeads: number,
    totalAmountOfHeads: number,
    totalNumberOfTails: number
    totalFirePower: number,
}

interface DragonSectionProps {
    model: DragonModel
}

const dragonSection: React.FC<DragonSectionProps> = props => {
    const classes = styles();

    return(
        <ExpansionPanel className="DragonSection">
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="dragon-header"
            >
                <Typography className={classes.heading}>{bundle.dragon.sectionTitle}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>{bundle.dragon.totalNumberOfHeadsLabel}</TableCell>
                            <TableCell className="value-cell">{props.model.totalNumberOfHeads}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{bundle.dragon.totalAmountOfHeadsLabel}</TableCell>
                            <TableCell className="value-cell">{props.model.totalAmountOfHeads}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{bundle.dragon.totalNumberOfTailsLabel}</TableCell>
                            <TableCell className="value-cell">{props.model.totalNumberOfTails}</TableCell>
                        </TableRow>
                        <TableRow className="last-row">
                            <TableCell>{bundle.dragon.totalFirePowerLabel}</TableCell>
                            <TableCell className="value-cell">{props.model.totalFirePower}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};

export default dragonSection;
