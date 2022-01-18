{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (loginProps: ResourceLoadState) => {
    if (loginProps.state === "loading") {
      return;
    } else if (loginProps.state === "success") {
      return {
        response: { body: "loaded" },
      };
    } else if (loginProps.state === "fail") {
      return "no network";
    }
  };

  const one = printLoginState({ state: "loading" }); // 👀 loading...
  const two = printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  const three = printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  console.log({one,two,three})
}
