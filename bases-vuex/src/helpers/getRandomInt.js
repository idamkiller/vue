const getRandomInt = () => {
    return new Promise(resolve => {
        const min = 1;
        const max = 10;
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(() => {
            resolve(randomInt);
        }, 1000);
    })
}

export default getRandomInt;