import { nari, nastikko, video, written } from '../../fakedata/category'
import c from '../../styles/category.module.css'
import SideCategory from './SideCategory'

export default function Sidebar({ w, b }) {
    return (
        <div className={c.bg} style={{ maxWidth: w, borderRadius: b }}>
            <SideCategory name={'লিখিত প্রশ্নোত্তর'} cat={'likhito-proshno'} slug={'proshnottor'} item={written} />
            <hr style={{ borderColor: 'black', height: '2px' }} />
            <SideCategory name={'ভিডিও প্রশ্নোত্তর'} cat={'video-proshno'} slug={'videos'} item={video} />
            <hr style={{ borderColor: 'black', height: '2px' }} />
            <SideCategory name={'নারী অঙ্গন'} cat={'nari-ongon'} slug={'proshnottor'} item={nari} />
            <hr style={{ borderColor: 'black', height: '2px' }} />
            <SideCategory name={'নাস্তিক্যবাদের জবাব'} cat={'nastikkobad'} slug={'proshnottor'} item={nastikko.slice(0, 4)} />
        </div>
    )
}
