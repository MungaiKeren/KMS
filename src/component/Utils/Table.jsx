export default function Table(props){
    return (
        <div className="table">
            <h4>{props.tableName}</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Engine Capacity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{props.modelName}</td>
                    <td>{props.model}</td>
                    <td>{props.engineCapacity}</td>
                    <td>{props.price}</td>
                </tr>
            </table>
        </div>
    )
}