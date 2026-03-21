import ReactGA from "react-ga4";
import { GA_TRACKING_ID } from "constants/site";

export const initGA = () => {
    ReactGA.initialize(GA_TRACKING_ID);
}

export const logPageView = () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}

export const logEvent = (gaEvent) => {
    ReactGA.event({
        action: gaEvent.contributor.name,
        category: `${gaEvent.type} : ${gaEvent.partner}`,
        label: `${gaEvent.itemId} : ${gaEvent.title}`
    });
}

export default { initGA, logPageView, logEvent };
