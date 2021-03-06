function getRouter(){
    var router =
        new Router({
            basePath: "gearz-components/samples/navigation",

            //  To support areas, we need to indicate a global default value for the `area` attribute.
            // But don't think that `area` is a special key-word, it isn't. The `globals` definitions
            // just takes name-value pairs, and make these pairs globally available to all routes.
            // This means that, by adding `area: ""` to the list,
            globals: {area: ""},
            mixins: [routerMixins.location]
        })
            .addRoute("with-id", {
                UriPattern: "{controller}/{action}/{id}.html",
                Constraints: {id: "^\\d+$"}
            })
            .addRoute("about", {
                UriPattern: "{controller}/about.html",
                Defaults: { action: "about", pageComponent: "AboutPage", isClient: true }
            })
            .addRoute("index", {
                UriPattern: "{controller}/index.html",
                Defaults: { action: "index", pageComponent: "IndexPage", isClient: true }
            })
            .addRoute("normal", {
                UriPattern: "{controller}/{action}.html"
            })
            .addRoute("no-action", {
                UriPattern: "{controller}.html"
            });

    router.setCurrentLocation(document.location.pathname);

    return router;
}


var IndexPage = React.createClass({
    render: function () {
        var router = getRouter();
        return (
            <div>
                <h1>link.jsx</h1>
                <h2>Index</h2>
                <h3>using external router (request using a router)</h3>
                <Link
                    href={ {action: "about" } }
                    router={router}
                    target="output"
                    onNavigate={ null } >
                about page
                </Link>
                <h3>using internal router (normal browser request)</h3>


            </div>);
    }
});


var AboutPage = React.createClass({
    render: function () {
        var router = getRouter();
        return (
            <div>
                <h1>link.jsx</h1>
                <h2>About</h2>
                <h3>using external router (request using a router)</h3>
                <Link
                    href={ {action: "index"} }
                    router={router}
                    target="output"
                    onNavigate={ null } >
                about page
                </Link>
                <h3>using internal router (normal browser request)</h3>


            </div>);
    }
});
