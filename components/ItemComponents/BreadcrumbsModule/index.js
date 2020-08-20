import React from "react";

import Breadcrumbs from "components/shared/Breadcrumbs";

import { UNTITLED_TEXT } from "constants/site";


const BreadcrumbsModule = ({
  breadcrumbs
}) =>
  <div className={`breadcrumbsWrapper`}>
    <div className={`container breadcrumbsModule`}>
      <Breadcrumbs
        breadcrumbs={breadcrumbs.map(breadcrumb =>
          Object.assign({}, breadcrumb, {
            title: breadcrumb.title ? breadcrumb.title : UNTITLED_TEXT
          })
        )}
      />
    </div>
  </div>;

export default BreadcrumbsModule;
