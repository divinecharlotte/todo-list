const ls = () => {
   return JSON.parse(localStorage.getItem('mylist')) ? JSON.parse(localStorage.getItem('mylist')) : [];
}

const setList = (ml) => {
    localStorage.setItem('mylist', JSON.stringify(ml));
};

export { ls, setList }