const addDataTotd = () => {
    const allTd = document.querySelectorAll('td');
    allTd.forEach((td, index) => {
        td.dataset.x = `${getXY(index).x}`;
        td.dataset.y = `${getXY(index).y}`;
    })
}

function getXY(index) {
    let y = index % 10;
    let x = Math.floor(index / 10);
    return { x, y };
}
export default addDataTotd;