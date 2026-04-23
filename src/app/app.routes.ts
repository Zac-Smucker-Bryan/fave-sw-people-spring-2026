import { Routes } from '@angular/router';
import { TsteeleFaves } from './tsteele-faves/tsteele-faves';
import { CbaresFaves } from './cbares-faves/cbares-faves';

export const routes: Routes = [
    {
        path: "tsteele",
        component: TsteeleFaves,
    },
    {
        path: "cbares",
        component: CbaresFaves,
    },
];
