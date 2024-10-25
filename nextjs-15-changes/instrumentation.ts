import { type Instrumentation } from 'next'

/*
Capture important context about all errors thrown on the server, including:
Router: Pages Router or App Router
Server context: Server Component, Server Action, Route Handler, or Middleware
Report the errors to your favorite observability provider.
*/
export const onRequestError: Instrumentation.onRequestError = async (
    err,
    request,
    context
) => {

    console.log('MAKING USE OF INSTRUMENTATION LIFECYCLE HOOK')
    console.log(JSON.stringify(err))
    console.log(JSON.stringify(request))
    console.log(JSON.stringify(context))

}

export async function register() {
    //init your favorite observability provider SDK HERE!
}