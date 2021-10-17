import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core'
import { useState } from 'react'
import c from '../styles/dua.module.css'
import { AccordionHeader, AccordionText } from '../styles/muicustoms';

export default function DuaCategory({ handleDuaNumber, dua }) {

    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    const handleClick = id => {
        handleDuaNumber(id)
    }

    const cats = [
        { name: 'ঘুমের যিকর', slug: 'sleep' },
        { name: 'কাপড় পরিধানের যিকর', slug: 'cloth' },
        { name: 'বাথরুমের যিকর', slug: 'bathroom' },
        { name: 'উযুর যিকর', slug: 'udhu' },
        { name: 'বাসায় আসা-যাওয়ার যিকর', slug: 'home' },
        { name: 'মাসজিদের যিকর', slug: 'masjid' },
        { name: 'আযানের যিকর', slug: 'adhan' },
        { name: 'সালাতের যিকর', slug: 'salat' },
        { name: 'নিরাপত্তাবিষয়ক যিকর', slug: 'safety' },
        { name: 'সালাত শেষে যিকর', slug: 'after-salat' },
        { name: 'অন্যান্য যিকর', slug: 'others' },
        { name: 'প্রত্যাহিক যিকর', slug: 'every-day' },
        { name: 'দাম্পত্যবিষয়ক যিকর', slug: 'spouse' },
        { name: 'মৃত ও কবর সংশ্লিষ্ট যিকর', slug: 'death' },
        { name: 'সিয়াম', slug: 'siyam' },
        { name: 'খাদ্যগ্রহন সংশ্লিষ্ট যিকর', slug: 'eating' },
        { name: 'সফর সংশ্লিষ্ট যিকর', slug: 'safar' },
        { name: 'হজ্জ এর যিকর', slug: 'hajj' },
        { name: 'কুরআনের দুআ', slug: 'quran' }
    ]

    return (
        <div className={c.cat}>
            {
                cats.map((item, key) => {
                    const selected = dua.filter(i => item.slug === i[2])

                    return <Accordion expanded={expanded === `panel${key + 1}`} onChange={handleChange(`panel${key + 1}`)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#eee' }} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <AccordionHeader>{item.name}</AccordionHeader>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AccordionText>
                                {
                                    selected.map((i, n) => <>
                                        <Button onClick={() => handleClick(i[0])} style={{ color: '#eee', fontWeight: '300' }} key={n}>{i[1]}</Button> <hr style={{ color: '#eee', height: '2px', margin: '0' }} /></>
                                    )
                                }
                            </AccordionText>
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div>
    )
}
