import ImgePropsType from "../../types"

const Img = (props: ImgePropsType) => {
    console.log(props.img)
    return <img src={props.img} alt={props.alt} className="placeImg"/>
}
export default Img
