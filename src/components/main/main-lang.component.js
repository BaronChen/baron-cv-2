import Main from './main.component';
import * as React from 'react';

//https://github.com/ReactTraining/react-router/issues/4578

const base = (locale) => () => <Main locale={locale} />;

export const MainZh = base("zh");
export const MainEn = base("en");