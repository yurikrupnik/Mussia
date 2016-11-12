const SERVER = {
    HOST: 'localhost',
    PORT: 4000,
    URL: function () {
        return `${SERVER.HOST}:${SERVER.PORT}`;
    }
};


export {
    SERVER
}