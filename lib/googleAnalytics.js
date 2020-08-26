import ReactGA from "react-ga";
import { GA_TRACKING_ID } from "constants/site";

export const initGA = () => {
    ReactGA.initialize(GA_TRACKING_ID);
}

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

export const logEvent = function (gaEvent) {
    ReactGA.event({
        action: gaEvent.contributor,
        category: `${gaEvent.type} : ${gaEvent.partner}`,
        label: `${gaEvent.itemId} : ${gaEvent.title}`
    });
}

export default {initGA, logPageView, logEvent: logEvent};