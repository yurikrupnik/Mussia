import React from 'react';

export default () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1> Node Authentication</h1>
            <p>Login or Register with:</p>

            <div className="fb-login-button" data-max-rows="1" data-size="icon" data-show-faces="false" data-auto-logout-link="false"></div>
            <hr/>
            <div>
                <a href="/auth/facebook">Facebook</a>
            </div>
            <div>
                <a href="/auth/github">Github</a>
            </div>

            <form action="/auth/local" method="post">
                <div >
                    <label>Email</label>
                    <input type="text" name="username"/>
                </div>
                <div >
                    <label>Password</label>
                    <input type="password"  name="password"/>
                </div>

                <button type="submit" >Login</button>
            </form>
        </div>
    )
}