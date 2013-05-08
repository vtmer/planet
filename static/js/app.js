define([
       'router'
], function(AppRouter) {
    var kickoff = function() {
        console.log('beep!');

        AppRouter.kickoff();
    };

    return {
        'kickoff': kickoff
    };
});
