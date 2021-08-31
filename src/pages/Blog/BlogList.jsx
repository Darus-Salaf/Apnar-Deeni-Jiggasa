import BlogLeft from "../../components/blog/BlogLeft"
import BlogPost from "../../components/blog/BlogPost"
import CreateBlog from "../../components/blog/CreateBlog"
import RightSide from "../../components/home/RightSide"

let lists = [
    {
        name: 'Name 420',
        question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.`,
        date: new Date()
    },
    {
        name: 'Name 420',
        question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.`,
        date: new Date()
    },
    {
        name: 'Name 420',
        question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.`,
        date: new Date()
    },
    {
        name: 'Name 420',
        question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.`,
        date: new Date()
    },
    {
        name: 'Name 420',
        question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat dignissimos fugiat incidunt aliquid similique nesciunt placeat quas tempore quam.`,
        date: new Date()
    },
]

export default function BlogList() {

    let width = window.innerWidth < 1230
    let widthforSide = window.innerWidth < 1200
    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className="col-md-2 categ">
                <BlogLeft />
            </div>

            <div className={widthforSide ? 'col-md-8' : 'col-md-6'}>
                <CreateBlog />
                {
                    lists.map(list => <BlogPost name={list.name} question={list.question} date={list.date} />)
                }
            </div>

            <div className={widthforSide ? 'col-md-4' : 'col-md-4'}>
                <RightSide />
            </div>

        </div>
    </div>
}
