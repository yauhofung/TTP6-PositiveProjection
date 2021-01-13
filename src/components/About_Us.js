import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


//other imports

class About_Us extends React.Component {

    //other member functions and variables can go here

    render() {
        //JS code goes here
        // but not all of your code
        //const classes = useStyles();
        //const  = (event) => event.();

       



        const name = 'Kris Mickens';


        return (
            //JSX HTML goes here
            <>
                <Box component="span" m={2}><Button />

                    <h1> HeYau DeKredit</h1>

                </Box>
                <h2> <i> established & begat January 2021 </i> </h2>
                <h3> OUR CORPORATE STORY </h3>
                <p>


                    We are a global tech-based credit banking company. We believe knowledge,
                    technology and students coming together brings progress. Our unique outlook
                    transforms knowledge, students, and future tech companies into insights to power
            decision makers that move people forward.</p>

                <p>
                    We serve as a consumer advocate, steward of financial literacy, and champion of economic
                    advancement. As an innovative global company that enables access to credit, we’re part of
                    breakthrough collaborations, breaking down barriers and innovations that address complex
                    social challenges such as social welfare, community relations and financial education for
                    underprivileged youth, tech students and future and budding tech companies. We finance
                    relationships that create economically healthy communities. We help individuals gain financial
                    independence by increasing access to capital for small businesses. And we provide young adults
                    entering college or university and startup tech companies with financial education tools.
            </p>

                <p>
                    Every day, around the globe, we are Powering the World with Knowledge and helping people
                    live their financial best.
            </p>

                <p>
                    Values: Our people are at the heart of our success. What we believe and how we act are at
                    the core of how we will deliver on our purpose to help people live their financial best.
            </p>

                <p>
                    How do we operate?</p>

                <p>* HeYau DeKredit accepts applications for funding for credit and verifies credit scores.
                WE offer priority offered to students and small tech companies not from credit score but,
                from a burning desire to serve with technology.
            </p>
                <p>Who is your FAVORITE Bank President?</p>


                <div>
      <Radio
        
        
        value="a"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'A' }}
      /> Yau Ho
      <Radio
        
        
        value="b"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'B' }}
      />Henji
      
      <Radio
        
        
        value="d"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'D' }}
      />Deon
      <Radio
        
        
        value="e"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'E' }}
      /> Kris
    </div>



                    <h2> Founders</h2>
                    <p> Click the name of our Founding Presidents to find out more about us:</p>
                    <Link href="https://github.com/yauhofung/" >
                        Yau Ho</Link>
                    
                     | 
                        
                    <Link href="https://github.com/Henotis/" >
                     Henji</Link>  | 
                    <Link href="https://github.com/ddesir/">
                        Deon</Link>  | 
                    
                        <Link href="https://github.com/SuperArtisMickens/">
                        Kris</Link>
                    
                

            </>
        )
    }

}

export default About_Us