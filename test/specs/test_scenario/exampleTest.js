const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
    it('Test example', () => {
        // browser.setTimeout({ 'implicit': 5000 });

        browser.url('https://trueautomation.io');
        browser.pause(3000);
        $(ta('loginBtn', 'a.login-btn')).click();
        browser.pause(3000);
        $(ta('signUpBtn', 'div.sign-up-container > a')).click();
        browser.pause(3000);
        $(ta('emailFld', "[name='email']")).setValue('your@gmail.com');
        browser.pause(3000);
    });
});
