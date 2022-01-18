{
    var printLoginState = function (loginProps) {
        if (loginProps.state === "loading") {
            return;
        }
        else if (loginProps.state === "success") {
            return {
                response: { body: "loaded" }
            };
        }
        else if (loginProps.state === "fail") {
            return "no network";
        }
    };
    var one = printLoginState({ state: "loading" }); // 👀 loading...
    var two = printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
    var three = printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
    console.log({ one: one, two: two, three: three });
}
