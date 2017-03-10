import React from 'react';

export default () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1> Node Authentication</h1>
            <p>Login or Register with:</p>

            <div>
                <a href="/auth/facebook">Facebook</a>
            </div>
            <div>
                <a href="/auth/github">Github</a>
            </div>

            <form>
                <input type="text"/>
                <input type="password"/>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}