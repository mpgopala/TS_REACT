type IAppProps = {
    filterEvent:(txt:string) => void
}
export default function Filter(props:IAppProps){
    return <>
        <input type="text" 
            placeholder="search by name" 
            onChange={(evt) => props.filterEvent(evt.target.value)} />
    </>
}