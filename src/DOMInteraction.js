const addClassNameToAll = () => {
    const allTd = document.querySelectorAll('td');
    allTd.forEach((td, index) => td.className = `${index}`)
}
export default addClassNameToAll;

