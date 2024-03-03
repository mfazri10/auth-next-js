/**
 * Array of routes that are accessible to the public
 * these routes do not require authentication
 * @type(string[])
 */


export const publicRoutes = [
    "/",
    "/auth/new-verification"
];


/**
 * Array of routes that are use for authentication
 * these routes will redirect loggin user to /setting
 * @type(string[])
 */


export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/**
 * the prefix for API authentication routes
 * Routes that star with this prefix are used for API authentication purporse
 * @type(string[])
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after logging in
 * @type(string[])
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";