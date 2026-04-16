"use client";

import { useState, useEffect } from "react";
import { COLA_DATA } from "@/lib/cola-data";

type State =
  | { phase: "loading" }
  | { phase: "upcoming"; days: number; hours: number; minutes: number }
  | { phase: "past" };

export function CountdownTimer() {
  const [state, setState] = useState<State>({ phase: "loading" });

  useEffect(() => {
    const target = new Date(COLA_DATA.nextCPIRelease).getTime();

    function update() {
      const diff = target - Date.now();

      if (diff <= 0) {
        setState({ phase: "past" });
        return;
      }

      setState({
        phase: "upcoming",
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  if (state.phase === "loading") {
    return (
      <p className="text-base text-gray-600">
        Next CPI release:{" "}
        <span className="font-semibold text-gray-900">
          {COLA_DATA.nextCPILabel}
        </span>
      </p>
    );
  }

  if (state.phase === "past") {
    return (
      <p className="text-base text-gray-600">
        CPI data for {COLA_DATA.nextCPILabel} has been released — forecast
        updating shortly.
      </p>
    );
  }

  return (
    <p className="text-base text-gray-600">
      Next CPI release:{" "}
      <span className="font-semibold text-gray-900">
        {COLA_DATA.nextCPILabel}
      </span>{" "}
      <span className="text-blue-800 font-semibold">
        ({state.days}d {state.hours}h {state.minutes}m)
      </span>
    </p>
  );
}
