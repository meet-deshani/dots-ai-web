import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from '@/lib/analytics';
import { notifyWebsiteVisit, notifyPageView } from '@/lib/telegram';

// Track if this is the first page load (initial visit)
let isFirstLoad = true;

const AnalyticsTracker = () => {
    const location = useLocation();
    const previousPath = useRef<string | null>(null);

    useEffect(() => {
        // Log to Google Analytics
        logPageView();

        // Handle Telegram notifications
        const handleNotifications = async () => {
            if (isFirstLoad) {
                // First visit - send full visitor info
                await notifyWebsiteVisit();
                isFirstLoad = false;
            } else if (previousPath.current !== location.pathname) {
                // Subsequent navigation - only notify for service pages
                await notifyPageView(location.pathname);
            }
            previousPath.current = location.pathname;
        };

        handleNotifications();
    }, [location]);

    return null;
};

export default AnalyticsTracker;
