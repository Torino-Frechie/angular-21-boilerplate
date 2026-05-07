import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => accountService.refreshToken()
        .toPromise()
        .then(() => {
            // success
        })
        .catch(() => {
            // error, but app should still load
        });
}
