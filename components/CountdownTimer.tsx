"use client";

import { useState, useEffect } from "react";
import { COLA_DATA } from "@/lib/cola-data";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  useEffect(() => {
    const target = new Date(COLA_DATA.nextCPIRelease).getTime();

    function update() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return null;
  }

  return (
    <p className="text-base text-gray-600">
      Next CPI release:{" "}
      <span className="font-semibold text-gray-900">
        {COLA_DATA.nextCPILabel}
      </span>{" "}
      <span className="text-blue-800 font-semibold">
        ({timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m)
      </span>
    </p>
  );
}
