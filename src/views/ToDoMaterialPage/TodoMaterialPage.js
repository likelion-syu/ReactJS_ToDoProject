import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, IconButton ,Button, Paper ,  Typography, List,ListItem,ListItemText, ListItemSecondaryAction  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme =>({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",

    },   
}));

function TodoMaterialPage(props) {
    const [items, setItems] = React.useState([ 'Hello','Hello','Hello','Hello','Hello','Hello' ]);
    const classes = useStyles();
    
    return (
        // div로 감싸지 않고 사용하는 요소  
        <React.Fragment>
            {/* Material-UI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <main className={ classes.layout } >
                <Paper className={ classes.paper } color="default">
                    <Typography component="h1" variant="h5" align="center">
                        ToDo With Material-UI
                    </Typography>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField
                                // id="standard-basic"
                                className={classes.textField}
                                label="ToDo"
                                // margin="normal"
                                // type="text"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button>
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                    <React.Fragment>
                        <List>
                            {
                                items.map((item , idx) =>{
                                    return <ListItem key={idx}>
                                        <ListItemText primary={ item }/>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                })
                            }
                        </List>    
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
    
}

export default TodoMaterialPage;