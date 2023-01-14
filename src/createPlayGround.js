import generateAlphabetArr from "./generateAlphabetArr.js";

const alphabetArr = generateAlphabetArr(true);
const openTable = "<table>";
const closeTable = "</table>";
const openTableHead = "<th>";
const closeTableHead = "</th>";
const openTableRow = "<tr>";
const closeTableRow = "</tr>";
const openTableData = "<td>";
const closeTableData = "</td>";

const createPlayGround = () => {
    return `${openTable} ${createFirstRow()} ${createLastTenRows()} ${closeTable}`;
}

const createFirstRow = () => {
    let firstRowData = '';
    for (let i = 0; i < 10; i += 1) {
        firstRowData +=
            `${openTableHead} ${alphabetArr[i]} ${closeTableHead}
        `;
    }
    return openTableRow + openTableData
        + closeTableData
        + firstRowData + closeTableRow;
}

const createRowContent = () => {
    let rowContent = '';
    for (let i = 1; i <= 10; i += 1) {
        rowContent += `${openTableData} ${closeTableData}`;
    }

    return rowContent;
}

const createLastTenRows = () => {
    return [...Array(10)].map((el, index) => `${openTableRow}
    ${openTableHead}${index + 1}${closeTableHead}${createRowContent()}${closeTableRow}`)
        .reduce((prev, cur) => prev + cur, '')
}

export default createPlayGround;