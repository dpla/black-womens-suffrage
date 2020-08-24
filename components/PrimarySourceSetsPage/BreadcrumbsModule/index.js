import React from "react";

import Breadcrumbs from "components/shared/Breadcrumbs";

const BreadcrumbsModule = ({ route, breadcrumbs }) =>
  <div className={`.breadcrumbsWrapper`}>
    <div className={`.container .breadcrumbsModule`}>
      <Breadcrumbs
        breadcrumbs={breadcrumbs.map(breadcrumb =>
          Object.assign({}, breadcrumb, {
            title: breadcrumb.title
          })
        )}
      />
    </div>
  </div>;

export default BreadcrumbsModule;
