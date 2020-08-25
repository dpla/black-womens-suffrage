import ReactGA from "react-ga";

export const initGA = () => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
}

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

export const logEvent = function (gaEvent) {
    console.log("LOGGING GA EVENT: " + JSON.stringify(gaEvent));
    ReactGA.event({
        action: gaEvent.contributor,
        category: `${gaEvent.type} : ${gaEvent.partner}`,
        label: `${gaEvent.itemId} : ${gaEvent.title}`
    });
}

export default {initGA, logPageView, logEvent: logEvent};