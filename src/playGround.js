import generateAlphabetArr from "./generateAlphabetArr.js";
import generateIntegersArr from "./generateIntegersArr.js";

const alphabetArr = generateAlphabetArr(true);
//const numbers = generateIntegersArr(11).slice(1);

const openTable = "<table>";
const closeTable = "</table>";
const openTableHead = "<th>";
const closeTableHead = "</th>";
const openTableRow = "<tr>";
const closeTableRow = "</tr>";
const openTableData = "<td>";
const closeTableData = "</td>";

const createPlayGround = () => {
    return openTable + createFirstRow() + createLastTenRows + closeTable;
}



const createFirstRow = () => {
    const firstRowData = '';
    for (let i = 0; i < 10; i += 1) {
        firstRowData +=
            `${openTableHead}
        +${alphabetArr[i]}
        +${closeTableHead}
        `;
    }
    return openTableRow + openTableData
        + closeTableData
        + firstRowData + closeTableRow;
}

const createEmptyRow = () => {
    const rowContent = `${openTableHead} + ${closeTableHead}`;
    for (let i = 1; i <= 10; i += 1) {
        rowContent += `${openTableData}+${closeTableData}`;
    }
    return openTableRow + rowContent + closeTableRow;

}

const createLastTenRows = () => {
    return [...Array(10)].map(() => createEmptyRow())
        .reduce((prev, cur) => prev + cur, 0)
}

export default createPlayGround;