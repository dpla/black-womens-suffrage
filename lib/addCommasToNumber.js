const addCommasToNumber = number =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default addCommasToNumber;
