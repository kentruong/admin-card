import Head from "next/head";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './styled';

const styles = {
    customTabs: {
        background: "rgba(255, 255, 255, 0.8)",
        color: "#000",
    },
};

const Login = props => {
    const clases = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { classes, children, className, ...other } = props;
    return (
        <div className={clases.parentContainer}>
            <Head>
                <title>Login</title>
            </Head>
            <div className={clases.overLoad}></div>
            <div className={clases.loginContainer}>
                <div className={clases.divLogin}>
                    <div className={clases.logo}>
                        <img src="/logos/logo.png" alt="Logo" />
                    </div>
                    <AppBar position="static" className={clases.AppBar}>
                        <Tabs
                            indicatorColor="primary"
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="icon tabs example"
                            className={clases.Tabs}
                            boxShadow={0}
                            className={clsx(classes.customTabs, className)}
                        >
                            <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
                            <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} className={clases.TabPanel} >
                        Page One
                    </TabPanel>
                    <TabPanel value={value} index={1} className={clases.TabPanel} >
                        Page Two
                    </TabPanel>
                </div>
            </div>
        </div >
    );
}

Login.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


export default withStyles(styles)(Login);

