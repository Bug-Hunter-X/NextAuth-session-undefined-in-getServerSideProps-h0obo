# NextAuth session undefined in getServerSideProps
This repository demonstrates a bug where NextAuth session is undefined when using `getServerSideProps`, but works correctly with `getStaticProps`.  The issue arises from attempting to access the session within a component's scope, where the request and response objects are not directly available.

## Bug Description
The code uses `unstable_getServerSession` to retrieve the user's session.  While this works perfectly with `getStaticProps`, in `getServerSideProps` the `session` variable is always `undefined`. This is because `getServerSideProps` doesn't provide `req` and `res` objects directly to the component.

## Solution
The solution involves fetching the session within the `getServerSideProps` function itself and passing it as a prop to the component.
