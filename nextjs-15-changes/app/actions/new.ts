'use server';

import { cookies } from 'next/headers';
import { unstable_after as after } from 'next/server';


function doStuff() {
    // new experimental.after hook
    // This hook runs after the request has been processed. Good for long running tasks.
    after(() => {
        console.log('This is like a middleware that runs after the request has been processed.');
    });

    // Primary task
    return {
        "success": true,
    }
}

export { doStuff };


async function theNewWay() {

    const cookie = await cookies();
    console.log(cookie);
    /*
        cookies
        headers
        draftMode
        params in layout.js, page.js, route.js, default.js, generateMetadata, and generateViewport
        searchParams in page.js
        no worries - this codemon is here to help you out : npx @next/codemod@canary next-async-request-api .
    */
}

export { theNewWay };


// BETTER SECURITY FOR SERVER ACTIONS !
// https://nextjs.org/blog/next-15#enhanced-security-for-server-actions
// This action **is** used in our application, so Next.js
// will create a secure ID to allow the client to reference
// and call the Server Action.
export async function updateUserAction(formData) { }

// This action **is not** used in our application, so Next.js
// will automatically remove this code during `next build`
// and will not create a public endpoint.
export async function deleteUserAction(formData) { }