import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";
import { profiles, Profile } from "@/data/mockData";
import MatchOverlay from "@/components/MatchOverlay";
import AppHeader from "@/components/AppHeader";

const SurpriseMatch = () => {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [matchProfile, setMatchProfile] = useState<Profile>(profiles[0]);
  const [showMatch, setShowMatch] = useState(false);

  const handleRevealAndLike = (profile: Profile) => {
    if (likedIds.has(profile.id)) return;

    setRevealedIds((prev) => new Set(prev).add(profile.id));

    setTimeout(() => {
      setLikedIds((prev) => new Set(prev).add(profile.id));

      if (Math.random() > 0.5) {
        setMatchProfile(profile);
        setTimeout(() => setShowMatch(true), 400);
      }
    }, 600);
  };

  return (
    <div className="mx-auto flex h-[calc(100dvh-60px)] max-w-lg flex-col overflow-y-auto pb-20 pt-2">
      <AppHeader title="match surpresa" />

      <p className="px-6 pb-4 pt-4 text-center text-sm text-muted-foreground">
        Descubra alguém pelos interesses, sem ver fotos. Toque para curtir!
      </p>

      {/* Grid of surprise boxes */}
      <div className="px-4 pb-20">
        <div className="grid grid-cols-2 gap-3">
          {profiles.map((profile) => {
            const revealed = revealedIds.has(profile.id);
            const liked = likedIds.has(profile.id);

            return (
              <motion.button
                key={profile.id}
                onClick={() => handleRevealAndLike(profile)}
                disabled={liked}
                className="relative overflow-hidden rounded-2xl border border-brand-pink/30 bg-white p-4 text-left transition-colors hover:bg-brand-soft disabled:opacity-70 shadow-sm"
                whileTap={!liked ? { scale: 0.96 } : undefined}
                layout
              >
                {/* Gift icon before reveal */}
                <AnimatePresence>
                  {!revealed && (
                    <motion.div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft"
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Gift className="h-6 w-6 text-brand-pink" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Liked heart */}
                <AnimatePresence>
                  {liked && (
                    <motion.div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Info */}
                <div className="space-y-1.5">
                  <p className="text-xs text-muted-foreground">
                    {profile.age} anos · {profile.occupation}
                  </p>
                  <p className="text-sm leading-snug text-foreground/80 line-clamp-2">
                    {profile.bio}
                  </p>
                </div>

                {/* Interests */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {profile.interests.slice(0, 3).map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-medium text-brand-pink border border-brand-pink/5"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                {/* Liked label */}
                {liked && (
                  <motion.p
                    className="mt-2 text-xs font-medium text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Curtido ✓
                  </motion.p>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <MatchOverlay
        show={showMatch}
        profile={matchProfile}
        onClose={() => setShowMatch(false)}
      />
    </div>
  );
};

export default SurpriseMatch;
