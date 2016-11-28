import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { BaseService } from '../shared/index';
import { AnalyticsService, LogService } from '../../framework.ref';

export const CONTEXT = 'login';

@Injectable()
export class AuthService extends BaseService {
    private authenticated = false;

    constructor(analyticsService: AnalyticsService, httpService: Http, logService: LogService, private router: Router) {
        super(analyticsService, httpService, CONTEXT, logService);
    }
    isAuthenticated() {
        return this.authenticated;
    }

    authenticate(username: string, password: string) {
        this.router.navigate(['../app']);
        this.authenticated = true;
        return true;
    }

}
