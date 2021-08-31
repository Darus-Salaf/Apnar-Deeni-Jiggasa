import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import c from '../../styles/form.module.css'
import c2 from '../../styles/qa.module.css'

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={c.main}>
            <p className={c2.heading}>প্রশ্ন করুন</p>
            <div className={c.form}>
                <AppBar position="static" style={{ backgroundColor: '#163c3f'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="form tabs" style={{display: 'flex', alignItems: 'center'}}>
                        <Tab className="bangla text-white fw-bold" style={{color: 'white', zIndex: 999, fontSize: '1.1rem'}} label="প্রশ্ন পাঠিয়ে দিন" {...a11yProps(0)} />
                        <Tab className="bangla text-white fw-bold" style={{color: 'white', zIndex: 999, fontSize: '1.1rem'}} label="প্রশ্ন পোস্ট করুন" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <input className="bangla" name="name" placeholder="আপনার নাম ( ঐচ্ছিক )" type="text" />
                    <input className="bangla" name="email" placeholder="ইমেইল এ্যাড্রেস ( আবশ্যক )" type="email" />
                    <textarea name="question" placeholder="আপনার প্রশ্নটি লিখুন" className="bangla w-100" rows="3"></textarea>
                    <div className="text-center mt-4 bangla">
                        <p className="bg-light py-1 rounded text-danger mb-3 warning">আপনার প্রশ্নটি সরাসরি কর্তৃপক্ষের ইমেইলে পাঠানো হবে</p>
                        <button className={c.formBtn}>Send</button>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <input className="bangla" name="name" placeholder="আপনার নাম ( ঐচ্ছিক )" type="text" />
                    <input className="bangla" name="email" placeholder="ইমেইল এ্যাড্রেস ( আবশ্যক )" type="email" />
                    <textarea name="question" placeholder="আপনার প্রশ্নটি লিখুন" className="bangla w-100" rows="3"></textarea>
                    <div className="text-center mt-4 bangla">
                        <p className="bg-light py-1 rounded text-danger mb-3 warning">আপনার প্রশ্নটি ওয়েবসাইটের ব্লগে পোস্ট হবে</p>
                        <button className={c.formBtn}>Post</button>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}
