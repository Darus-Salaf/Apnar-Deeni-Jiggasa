import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Dialog } from '@material-ui/core'
import { useState } from 'react'
import c from '../styles/dua.module.css'
import { AccordionHeader, AccordionText } from '../styles/muicustoms';

export default function DuaCategory({ handleDuaNumber }) {

    const [expanded, setExpanded] = React.useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    const [open, setOpen] = useState(false)
    const cat = [
        'sleep',
        'cloth',
        'bathroom',
        'udhu',
        'home',
        'masjid',
        'adhan',
        'salat',
        'safety',
        'after-salat',
        'others',
        'every-day',
        'spouse',
        'death',
        'siyam',
        'eating',
        'safar',
        'hajj',
        'quran'
    ]
    const cats = [
        'ঘুমের যিকর',
        'কাপড় পরিধানের যিকর',
        'বাথরুমের যিকর',
        'উযুর যিকর',
        'বাসায় আসা-যাওয়ার যিকর',
        'মাসজিদের যিকর',
        'আযানের যিকর',
        'সালাতের যিকর',
        'নিরাপত্তাবিষয়ক যিকর',
        'সালাত শেষে যিকর',
        'অন্যান্য যিকর',
        'প্রত্যাহিক যিকর',
        'দাম্পত্যবিষয়ক যিকর',
        'মৃত ও কবর সংশ্লিষ্ট যিকর',
        'সিয়াম',
        'খাদ্যগ্রহন সংশ্লিষ্ট যিকর',
        'সফর সংশ্লিষ্ট যিকর',
        'হজ্জ এর যিকর',
        'কুরআনের দুআ'
    ]

    return (
        <div className={c.mobileBtn2}>
            <Button style={{ borderRight: '2px solid #163c3f' }} onClick={() => setOpen(true)}>
                দু'আর ক্যাটাগরি
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div>
                    {
                        cats.map((item, key) => <Accordion expanded={expanded === `panel${key + 1}`} onChange={handleChange(`panel${key + 1}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <AccordionHeader>{item}</AccordionHeader>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionText>
                                    {item} <br />
                                    {item} <br />
                                    {item} <br />
                                </AccordionText>
                            </AccordionDetails>
                        </Accordion>)
                    }
                </div>
            </Dialog>
        </div>
    )
}
