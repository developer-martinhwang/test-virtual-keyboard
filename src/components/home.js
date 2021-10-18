import React, {useState}from 'react'
import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import Keyboard from 'react-virtual-keyboard'
const styles = {
    root:{
        '& .ui-keyboard-button': {
            margin: "0",
            padding: "0",
            background: "lightgrey",
            width: "3em",
            height: "3em",
            borderWidth: "0.5px",
            lineHeight: "1px"
        },
        '& .ui-keyboard-text': {
            color: "grey"
        }
    }
}
// onInputChanged = (data) => {
//     this.setState({ input: data });
// }

// onInputSubmitted = (data) => {
//     console.log("Input submitted:", data);
// }
// this.keyboard.interface.keyaction.enter = (base) => {
//     // Enter button pressed
//     // Accepting content, as an example:
//     return this.keyboard.interface.keyaction.accept(base);
// };
function Home(props) {
    const [input, setInput] = useState();
    const { classes } = props;
    return (
        <Box className={classes.root}>
              <Keyboard 
                value={input}
                name='keyboard'
                options={{
                    type:"num",
                    layout: "num",
                    restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
                    preventPaste : true,  // prevent ctrl-v and right click
                    autoAccept : true,

                    appendLocally: true,
                    // color: "dark",
                    // updateOnChange: true,
                    // initialFocus: true,
                    display: {
                        "accept" : "Submit"
                    }
                }}
                // onChange={this.onInputChanged}
                // onAccepted={this.onInputSubmitted}
                // ref={k => this.keyboard = k}
            />
        </Box>
    )
}
export default withStyles(styles)(Home);
