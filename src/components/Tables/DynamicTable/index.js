import "./style.scss";

export function DynamicTable(props) {
  if (props.dataSet !== "") {
    const rowLength = props.rows.length - 1;

    function handleTableBorderRadius(index = Number) {
      return index === rowLength ? "0 8px 0 0" : "0";
    }

    function handleTableData(data = Object) {
      const dataArray = Object.values(data);
      return dataArray;
    }

    return (
      <div className="dynamic-table">
        <table>
          <thead>
            <tr>
              <th style={{ borderRadius: "8px 0 0 0" }}>#</th>
              {props.rows.map((row, index) => (
                <th
                  key={index}
                  style={{ borderRadius: handleTableBorderRadius(index) }}
                >
                  {row}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.dataSet.map((data, index) => {
              const tableData = handleTableData(data);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {
                    tableData.map((tData, index) => {
                        return <td key={index}>{tData}</td>
                    })
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
