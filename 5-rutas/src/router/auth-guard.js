const isAuthenticated = (to, from, next) => {
    return new Promise( () => {
        const random = Math.floor(Math.random() * 100)
        if (random > 50) {
            console.log('can access')
            next()
        }else {
            console.log('Not access')
            next({name: '404'})
        }
    })
}

export default isAuthenticated