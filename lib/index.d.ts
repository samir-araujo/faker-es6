declare const faker: {
    helpers: {
        getLocale: typeof import("./helpers/getLocale").default;
        randomArrayElement: typeof import("./helpers/randomArrayElement").default;
        randomArrayElements: typeof import("./helpers/randomArrayElements").default;
        randomNumber: typeof import("./helpers/randomNumber").default;
    };
    name: {
        firstName: typeof import("./name/firstName").default;
    };
};
export default faker;
