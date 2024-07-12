import "./style.scss";

export function WeatherCurrentTable(props) {
    return (
        <table className="climate-condition-table">
            <tbody>
                <tr>
                    <td className="label">Sensação térmica</td>
                    <td className="value">{`${props.tableData.apparent_temperature}ºC`}</td>
                </tr>
                <tr>
                    <td className="label">Vento</td>
                    <td className="value">{`SSE ${parseInt(props.tableData.wind_speed_10m)} km/h`}</td>
                </tr>
                <tr style={{borderBottom: "none"}}>
                    <td className="label">Rajadas de vento</td>
                    <td className="value">{`${props.tableData.wind_gusts_10m} km/h`}</td>
                </tr>
            </tbody>
        </table>
    )
}