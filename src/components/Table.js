import { Fragment } from "react";

function Table({data, config}) {
    const renderedHeaders = config.map((header, index) => {
        if (header.header) {
            return <Fragment key={index}>{header.header()}</Fragment>;
        }
        return (
            <th key={index}>{header.label}</th>
        );
    });

    const renderedRows = data.map((rowData, index) => {
        const renderedCells = config.map((cell, cellIndex) => {
            return (
                <td className='p-2' key={cellIndex}>{cell.content(rowData)}</td>
            );
        });
        return (
            <tr className="border-b" key={index}>
                {renderedCells}
            </tr>
        );
    });
    return (
        <table className="table-fixed border-spacing-2 w-3/5">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody className="self-end">
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;