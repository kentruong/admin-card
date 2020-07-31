import { makeStyles } from "@material-ui/core/styles";
let Background =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1713&q=80";

export default makeStyles((theme) => ({
    parentContainer: {
        height: "100vh",
        width: "100vw",
    },
    loginContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    overLoad: {
        height: "100vh",
        width: "100vw",
        background: "rgb(2, 0, 36)",
        background: "linear-gradient(180deg, rgba(236,244,255,1) 35%, rgba(47,128,237,1) 100%)",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.8,
    },
    divLogin: {
        width: 430,
        zIndex: 1,
        padding: 30,
        borderRadius: 5,
        background: "rgba(255, 255, 255)",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
    },
    logo: {
        width: "100%",
        textAlign: "center",
    },
    TabPanel: {
        background: "rgba(255, 255, 255, 0.8)",
    },

    AppBar: {
        boxShadow: "none",
        background: "rgba(255, 255, 255, 0.8)",
    },
}));