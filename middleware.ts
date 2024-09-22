import middlware from 'next-auth/middleware'
// Middleware is a special file in next.js

export default middlware;


export const config={
    //*: zero or more parameter
    //+: one or more
    // ?: zero or one

    matcher:['/users/:id*']  // if a unauthorized user goes to this page he is redirected to the login page
                            // by the middleware
}