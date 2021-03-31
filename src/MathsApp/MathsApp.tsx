import { Switch, Route } from 'react-router';
import { FunctionReference } from './Manual/FunctionReference';
import { Manual } from './Manual/Manual';

export function MathsApp() {
  return (
    <Switch>
      <Route path="/MathsApp/FunctionReference">
        <FunctionReference />
      </Route>
      <Route path="/MathsApp/Manual">
        <Manual />
      </Route>
    </Switch>
  );
}
