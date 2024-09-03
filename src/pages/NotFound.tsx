import { useRouteError } from "react-router-dom";

type RouteError ={
    statusText?: string;
    message?: string;
}
export function NotFound() {
  const error = useRouteError() as RouteError;
  console.log(error);
 
  return( 
  <>
  <h1>Oops!</h1>
  <p>An error occured.</p>
  <p>
    <i>{error?.statusText || error?.message}</i>
  </p>
  </>
  );
}
