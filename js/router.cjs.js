/*! BuildToolsCookbook v2.0.0 | (c) 2023 R A H U L J A I S W A L (RJ) | MIT License |  */
'use strict';

require('silkrouter');
require('silkrouter/operators');

//Plugin




const TabRouterClass = class TabRouter {
    state = {
        currentHash: null,
        lastHash: null,
        lastUrl: null,
        currentUrl: null,
        currentObjectName: null,
        currentTitleSelector: null
    };
    silkRouter = new SilkRouter();
    routes = [];
    activeRoute = null;
    routerConfig = {};

    subscribeToSilkRouterEvents() {
        this.silkRouter.subscribe(event => {
            this.state.lastHash = this.state.currentHash;
            this.state.lastUrl = this.state.currentUrl;
            this.state.currentHash = this.getUrlHashWithoutParams();
            this.state.currentUrl = window.location.hash;
        });
    }
    setRouteState(data = null) { 
        // Do not use this method, it's not working as of now. Can be corrected in the future if required.
        const route = this.activeRoute;
        route["state"]["data"] = data;
        route.state.skipHandler = true;
        this.setRoute(window.location.hash, route, "", false);    
    }
    setRoute(url, state = {}, title = "", replace = false) {
        this.silkRouter.set({
            route: document.location.pathname + url,
            data: JSON.stringify(state),
            preserveQuery: true,
            replace
        });
    }


};
var OeRouter;
initializeRouter();
function initializeRouter(){
    debugger;
	OeRouter = new TabRouterClass();
    OeRouter.subscribeToSilkRouterEvents();
}

$(document).ready(function() {
    var router = new SilkRouter();

    router.add('/main', function() {
      $('#content').html('<h2>Welcome to the home page!</h2>');
    });

    router.add('/detects', function() {
      $('#content').html('<h2>About us</h2><p>We are a company that does awesome things.</p>');
    });

    router.add('/another', function() {
      $('#content').html('<h2>Contact us</h2><p>Here\'s how to get in touch with us.</p>');
    });

    router.start();
  });
