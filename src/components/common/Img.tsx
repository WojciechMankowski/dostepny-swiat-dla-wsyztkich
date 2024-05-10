import ImgePropsType from "../../types"

const Img = (props: ImgePropsType) => {
    return <img src={props.img} alt={props.alt} className=" placeImg w-full h-auto"/>
}
export default Img
