import React from "../../../node_modules/react";
import PropTypes from "../../../node_modules/prop-types";
import { makeStyles } from "../../../node_modules/@material-ui/core/styles";
import Button from "../../../node_modules/@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

Register.propTypes = {};

function Register(props) {
    return (
        <Button variant="contained" color="primary">
            Register
        </Button>
    );
}

export default Register;
