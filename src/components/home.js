import React, {useState}from 'react'
import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import Keyboard from 'react-virtual-keyboard'
const styles = {
    root:{
        '& .ui-keyboard': {
        },
        '& .ui-keyboard-button': {
            margin: "0",
            padding: "0",
            // background: "lightgrey",
            width: "5em",
            height: "5em",
            border: "0.5px solid #cccbcb",
            borderRadius: "5px",
            lineHeight: "1px",
            // backgroundImage: "-webkit-linear-gradient(-90deg, #f6f4f4  0%, #e2e2e4 100%)",
            backgroundImage: "linear-gradient(-90deg, #d3d3d3 0%, #e2e2e4 100%)",
            cursor: "pointer",
            '& hover': {
                background: "#fff",
            }
        },
        '& .ui-keyboard-text': {
            color: "#4d4d4d",
            fontSize: "1em"
        }
    }
}

onInputSubmitted = (data) => {
    console.log("Input submitted:", data);
}
// this.keyboard.interface.keyaction.enter = (base) => {
//     // Enter button pressed
//     // Accepting content, as an example:
//     return this.keyboard.interface.keyaction.accept(base);
// };
function Home(props) {
    const [input, setInput] = useState();
    const { classes } = props;
    const onInputChanged = (data) => {
        setInput(data);
        console.log('data:', data)
    }
    console.log('input:', input);
    return (
        <Box className={classes.root}>
              <Keyboard 
                value={input}
                name='keyboard'
                options={{
                    type:"num",
                    layout : 'custom',
                    customLayout: {
                        'normal' : ["1 2 3", "4 5 6", "7 8 9", "- 0 {bksp}", "{a} {c} {del}"],
                        // 'shift'  : ['A B C D E', 'F G H I J', '{shift} {meta1} {a} {c}'],
                        // 'meta1'  : ['1 2 3 4 5', '6 7 8 9 0', '{shift} {meta1} {a} {c}']
                    },
                    restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
                    preventPaste : true,  // prevent ctrl-v and right click
                    autoAccept : true,
                    appendLocally: true,
                    color: "dark",
                    // updateOnChange: true,
                    // initialFocus: true,
                    display: {
                        "accept" : "Submit"
                    }
                }}
                onChange={onInputChanged}
                
                // onAccepted={this.onInputSubmitted}
                // ref={k => this.keyboard = k}
            />
        </Box>
    )
}
export default withStyles(styles)(Home);
