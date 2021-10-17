import React from 'react';
import emailjs from 'emailjs-com'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import c from '../../styles/form.module.css'
import c2 from '../../styles/qa.module.css'
import { init } from 'emailjs-com';

init("user_ew9uYiPeoSVp8P1WlUcnK");

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SimpleTabs() {

    const [value, setValue] = React.useState(0)
    const [input, setInput] = React.useState({
        name: '',
        email: '',
        question: '',
        answer: '',
        status: 'temp',
        date: new Date(),
        comments: []
    })

    const handleInput = e => {
        let formInput = { ...input }
        formInput[e.target.name] = e.target.value
        setInput(formInput)
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const handlePost = () => {
        if (input.email && input.question) {

            fetch('/api/jiggasa/create/question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Question created successfully. Please wait for admin approval.')
                        setInput({ ...input, name: '', email: '', question: '' })
                    } else alert('Question creation failed !')
                })
                .catch(err => alert(err.message))

        } else alert('Please enter your email address and question')
    }
    const handleSend = () => {
        if (input.email && input.question) {

            emailjs.send("service_mwjnesj", "template_5v2jkuu", {
                name: input.name || 'unknown',
                question: input.question,
                email: input.email,
            })
                .then(res => {
                    if (res.status === 200) {
                        alert("Question sent to Admin's email successfully ! Please wait for the answer.")
                        setInput({ ...input, name: '', email: '', question: '' })
                    } else alert('Failed to send question. Please try again !')
                })
                .catch(err => alert(err.message))

        } else alert('Please enter your email address and question')
    }

    return (
        <div className={c.main}>
            <p className={c2.heading}>প্রশ্ন করুন</p>
            <div className={c.form}>
                <AppBar position="static" style={{ backgroundColor: '#163c3f' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="form tabs" style={{ display: 'flex', alignItems: 'center' }}>
                        <Tab className="bangla text-white fw-bold" style={{ color: 'white', zIndex: 999, fontSize: '1.1rem' }} label="প্রশ্ন পাঠিয়ে দিন" {...a11yProps(0)} />
                        <Tab className="bangla text-white fw-bold" style={{ color: 'white', zIndex: 999, fontSize: '1.1rem' }} label="প্রশ্ন পোস্ট করুন" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <input className="bangla" value={input.name} onChange={e => handleInput(e)} name="name" placeholder="আপনার নাম ( ঐচ্ছিক )" type="text" />
                    <input className="bangla" value={input.email} onChange={e => handleInput(e)} name="email" placeholder="ইমেইল এ্যাড্রেস ( আবশ্যক )" type="email" />
                    <textarea name="question" value={input.question} onChange={e => handleInput(e)} placeholder="আপনার প্রশ্নটি লিখুন" className="bangla w-100" rows="3"></textarea>
                    <div className="text-center mt-4 bangla">
                        <p className="bg-light py-1 rounded text-danger mb-3 warning">আপনার প্রশ্নটি সরাসরি কর্তৃপক্ষের ইমেইলে পাঠানো হবে</p>
                        <button onClick={handleSend} className={c.formBtn}>Send</button>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <input className="bangla" value={input.name} onChange={e => handleInput(e)} name="name" placeholder="আপনার নাম ( ঐচ্ছিক )" type="text" />
                    <input className="bangla" value={input.email} onChange={e => handleInput(e)} name="email" placeholder="ইমেইল এ্যাড্রেস ( আবশ্যক )" type="email" />
                    <textarea name="question" value={input.question} onChange={e => handleInput(e)} placeholder="আপনার প্রশ্নটি লিখুন" className="bangla w-100" rows="3"></textarea>
                    <div className="text-center mt-4 bangla">
                        <p className="bg-light py-1 rounded text-danger mb-3 warning">আপনার প্রশ্নটি ওয়েবসাইটের ব্লগে পোস্ট হবে</p>
                        <button onClick={handlePost} className={c.formBtn}>Post</button>
                    </div>
                </TabPanel>
            </div>
        </div >
    );
}
