import { Paper, Tab, Tabs } from '@material-ui/core';
import { Switch, Route, useHistory, useLocation } from 'react-router';
import { FunctionReference } from './FunctionReference/FunctionReference';
import { Manual } from './Manual/Manual';
import styles from '../App.module.css';

export function MathsApp() {
  const { pathname } = useLocation();
  const history = useHistory();
  const isFunctionReferenceSelected = /MathsApp\/FunctionReference/.exec(pathname);

  return (
    <Paper className={styles['page']}>
      <Tabs value={isFunctionReferenceSelected ? 1 : 0} centered={true} className={styles['tabs']}>
        <Tab onClick={() => history.push('/MathsApp/Manual')} label="Manual" />
        <Tab onClick={() => history.push('/MathsApp/FunctionReference')} label="Function reference" />
      </Tabs>
      <div className={styles['page-content']}>
        <Switch>
          <Route path="/MathsApp/FunctionReference">
            <FunctionReference />
          </Route>
          <Route path="/MathsApp">
            <Manual />
          </Route>
        </Switch>
      </div>
    </Paper>
  );
}
