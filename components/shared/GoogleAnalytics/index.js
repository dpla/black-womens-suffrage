import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { initGA, logPageView } from "lib/googleAnalytics.js"

const GoogleAnalytics = ({ children }) => {
    const router = useRouter()

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()

        const handleRouteChange = () => logPageView()
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => router.events.off("routeChangeComplete", handleRouteChange)
    }, [])

    return <div>{children}</div>
}

export default GoogleAnalytics
