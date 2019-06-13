import React from 'react';
import {toMatchSnapshot} from "../../utils/testHelper";
import App from "../App";

it('Test run', () =>
    toMatchSnapshot('Test run for App', <App/>)
);
