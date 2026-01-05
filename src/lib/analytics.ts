import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-6YY65MG3TJ';
// Same URL as your form. 
// Web App must be deployed as "Anyone" and "Execute as Me".
const GAS_PIXEL_URL = "https://script.google.com/macros/s/AKfycbx72oClTKHTKLr5Nsi8YdfU6rclf0JbHx-hCwvF6yK4yhYMkqo4mXNA-BAObrrVy7KY/exec";

export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

// Send data to Google Sheet (The "Real-time Pixel")
const sendToSheet = (data: Record<string, string>) => {
    try {
        const params = new URLSearchParams(data);
        params.append('type', 'analytics'); // Flag for the backend script

        // Fire and forget (no-cors mode is required for GAS)
        fetch(`${GAS_PIXEL_URL}?${params.toString()}`, {
            method: 'POST',
            mode: 'no-cors'
        });
    } catch (e) {
        console.error("Analytics Error", e);
    }
}

export const logPageView = () => {
    const page = window.location.pathname;
    ReactGA.send({ hitType: "pageview", page });

    // Log to Sheet
    sendToSheet({
        category: 'System',
        action: 'PageView',
        page: page,
        source: document.referrer || 'Direct'
    });
};

export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({ category, action, label });

    // Log to Sheet
    sendToSheet({
        category,
        action,
        page: window.location.pathname,
        source: label || ''
    });
};
