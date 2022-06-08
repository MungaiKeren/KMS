import CategoryItem from "../component/CategoryItem"

export function Category(props){

    const Category = (props) => {
        return (
            <div className="category" onClick={()=>{
                window.location.href = `/category/${props.cat}`
            }}>
                <h4>{props.text}</h4>
                <p>{props.description}</p>
            </div>
        )
    }

    // get url
    const url = () => {
        let url = window.location.href
        let pathname = new URL(url).pathname;
        let catUrl = pathname.split("/")
        return catUrl[2]
    }

    if (url() ==="generators"){
        return <CategoryItem 
            catName="Generators"
            catDescription="This are generators"
        />
    }
    if (url()==="engines"){
        return <CategoryItem 
            catName="Engines"
            catDescription="This are now engines"
        />
    }

}

export default Category;