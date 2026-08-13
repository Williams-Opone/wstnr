"use client";

import { useEffect } from "react";

export default function AnalyticsTracker() {
  useEffect(() => {
    const SESSION_KEY = "wstnr_session_tracked";
    const SESSION_TTL = 30 * 60 * 1000;
    const now = Date.now();
    const last = localStorage.getItem(SESSION_KEY);
    if (!last || now - Number(last) > SESSION_TTL) {
      fetch("/api/track", { method: "POST" }).catch(() => {});
      localStorage.setItem(SESSION_KEY, String(now));
    }
  }, []);
  return null;
}