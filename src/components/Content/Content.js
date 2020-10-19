import React, { Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "../../../../goit-30-final-project-buy-a-flat/src/routes";
import PrivateRoute from "../../../../goit-30-final-project-buy-a-flat/src/components/PrivateRoute";
import Spinner from "../../../../goit-30-final-project-buy-a-flat/src/components/common/Spinner";
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.name} {...route} />
            ) : (
              <Route key={route.name} {...route} />
            )
          )}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Content;
