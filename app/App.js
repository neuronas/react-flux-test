import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/css/style.css';

import Layout from './components/Layout';

render(<Layout />,
  document.getElementById("root")
);
