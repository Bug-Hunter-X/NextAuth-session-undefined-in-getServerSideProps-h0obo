```javascript
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../pages/api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session: session,
    },
  };
}

export default function Page({session}) {
  console.log(session);
  return <div>Hello</div>;
}
```