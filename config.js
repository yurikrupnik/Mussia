const SERVER = {
    HOST: 'localhost',
    PORT: 4000,
    URL: function () {
        return `http://${SERVER.HOST}:${SERVER.PORT}`;
    },
    test: {
        PORT: 8000,
        url: function () {
            return `http://${SERVER.HOST}:${this.PORT}`;
        }
    }
};


console.log('process.env', process.env.PORT);





export {
    SERVER
}