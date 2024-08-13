const Label = (props) => {
    const{text} = props
    return (
        <label className="block text-slate-700 text-sm font-bold mb-2">{text}</label>
    )
}
export default Label