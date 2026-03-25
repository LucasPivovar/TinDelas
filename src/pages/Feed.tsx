import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { profiles } from "@/data/mockData";
import SwipeCard from "@/components/SwipeCard";
import MatchOverlay from "@/components/MatchOverlay";
import AppHeader from "@/components/AppHeader";

const Feed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchProfile, setMatchProfile] = useState(profiles[0]);
  const [showMatch, setShowMatch] = useState(false);

  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      if (direction === "right" && Math.random() > 0.5) {
        setMatchProfile(profiles[currentIndex]);
        setTimeout(() => setShowMatch(true), 300);
      }
      setCurrentIndex((prev) => prev + 1);
    },
    [currentIndex]
  );

  const currentProfile = profiles[currentIndex];

  return (
    <div className="relative mx-auto flex h-[calc(100dvh-60px)] max-w-lg flex-col">
      <AppHeader title="descobertas" />

      {/* Cards area */}
      <div className="relative flex-1 pt-4">
        <AnimatePresence>
          {currentProfile ? (
            <SwipeCard
              key={currentProfile.id}
              profile={currentProfile}
              onSwipe={handleSwipe}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-8 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">
                  Sem mais perfis
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Volte mais tarde para novas descobertas
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <MatchOverlay
        show={showMatch}
        profile={matchProfile}
        onClose={() => setShowMatch(false)}
      />
    </div>
  );
};

export default Feed;
