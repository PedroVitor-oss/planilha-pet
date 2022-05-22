const Clients = [
    { id:'0',nome:'Ariane'},
    { id:'1',nome:'Sandra'},
    { id:'2',nome:'Gessica'},
]

let renderPickerOpition = (i)=>{
    return (
        <Picker.Item label={i} value={i} />
    )
}





module.exports = {
     renderPickerOpition,Clients}