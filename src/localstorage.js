const mylist =  JSON.parse(localStorage.getItem('mylist')) || [];// eslint-disable-line

const setList = (mylist) => localStorage.setItem('mylist', JSON.stringify(mylist));

export { mylist, setList }