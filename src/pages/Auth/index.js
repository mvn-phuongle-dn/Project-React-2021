import React, {Suspense, lazy} from 'react';
import { Switch, Route } from "react-router-dom";
const Login = React.lazy(()=>import('./Login'));
const SignUp = React.lazy(()=>import('./SignUp'));

const Auth = () => {
  return(
    <Suspense fallback={<span>Loading...</span>}>
      <div className="section-login">
        <Switch>
          <Route path="/auth/login">
            <Login/>
          </Route>
          <Route path="/auth/signup">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </Suspense>
  );
}
export default Auth;
