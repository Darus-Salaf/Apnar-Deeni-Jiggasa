import c from '../../styles/blog.module.css'
import c2 from '../../styles/form.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Button } from '@material-ui/core'

export default function CreateBlog() {

    const handleInput = e => {

    }

    return (
        <div className={c.blogCreate}>
            <div className="row">
                <div className="col-1"><AccountCircleIcon fontSize="large" style={{ color: '#eee', marginTop: '10px' }} /></div>
                <div className="col-11">
                    <div className={c2.create}>
                        <input className="bangla" onChange={e => handleInput(e)} name="name" placeholder="আপনার নাম ( ঐচ্ছিক )" type="text" />
                        <input className="bangla" onChange={e => handleInput(e)} name="email" placeholder="ইমেইল এ্যাড্রেস ( আবশ্যক )" type="email" />
                        <textarea name="question" onChange={e => handleInput(e)} placeholder="আপনার প্রশ্নটি লিখুন" className="bangla w-100" rows="5"></textarea>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                            <p>Category</p>
                            <Button variant="contained">পোস্ট করুন</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
