export default function List({ data, inputVal }) {

    const filterDataList = data.filter((listItem) => {
        if (inputVal === '') {
            return null;
        }
        return listItem.title.toLowerCase().includes(inputVal);
    })


    return (
        <div className="m-4 w-3/6 h-10">
            <ul>
                {filterDataList.map((listItem, id) => {
                    return (<li key={id}>{listItem.title}</li>)
                })}
            </ul>
        </div>
    )
}