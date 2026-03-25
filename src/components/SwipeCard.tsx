import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Heart, X, MapPin, ChevronDown } from "lucide-react";
import { Profile } from "@/data/mockData";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface SwipeCardProps {
  profile: Profile;
  onSwipe: (direction: "left" | "right") => void;
  onMatch?: () => void;
}

const SwipeCard = ({ profile, onSwipe }: SwipeCardProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe("right");
    } else if (info.offset.x < -100) {
      onSwipe("left");
    }
  };

  const handlePhotoTap = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const tapX = e.clientX - rect.left;
    const half = rect.width / 2;
    if (tapX < half && currentPhoto > 0) {
      setCurrentPhoto(currentPhoto - 1);
    } else if (tapX >= half && currentPhoto < profile.photos.length - 1) {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  return (
    <>
      <motion.div
        className="absolute inset-x-4 top-0 bottom-24 cursor-grab active:cursor-grabbing"
        style={{ x, rotate }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[32px] border border-border"
          onClick={handlePhotoTap}
        >
          {/* Photo indicators */}
          <div className="absolute top-3 left-3 right-3 z-10 flex gap-1">
            {profile.photos.map((_, i) => (
              <div
                key={i}
                className="h-[3px] flex-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === currentPhoto ? "white" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>

          {/* Photo */}
          <img
            src={profile.photos[currentPhoto]}
            alt={profile.name}
            className="h-full w-full object-cover"
            draggable={false}
          />

          {/* LIKE overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-[32px]"
            style={{ opacity: likeOpacity }}
          >
            <div className="rounded-xl border-4 border-green-500 px-6 py-2 -rotate-12">
              <span className="text-4xl font-bold text-green-500">LIKE</span>
            </div>
          </motion.div>

          {/* NOPE overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-[32px]"
            style={{ opacity: nopeOpacity }}
          >
            <div className="rounded-xl border-4 border-heart px-6 py-2 rotate-12">
              <span className="text-4xl font-bold text-heart">NOPE</span>
            </div>
          </motion.div>

          {/* Bottom gradient with info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
              className="text-left"
            >
              <h2 className="text-3xl font-bold text-white">
                {profile.name}, {profile.age}
              </h2>
              <p className="mt-1 text-sm text-white/80">{profile.occupation}</p>
              <div className="mt-1 flex items-center gap-1 text-white/60">
                <MapPin className="h-3 w-3" />
                <span className="text-xs">{profile.distance} km</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-6">
        <button
          onClick={() => onSwipe("left")}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background transition-transform active:scale-90"
        >
          <X className="h-7 w-7 text-muted-foreground" />
        </button>
        <button
          onClick={() => onSwipe("right")}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red shadow-lg shadow-brand-red/30 transition-transform active:scale-90 hover:bg-black transition-colors"
        >
          <Heart className="h-7 w-7 text-white fill-current" />
        </button>
      </div>

      {/* Details sheet */}
      <Sheet open={showDetails} onOpenChange={setShowDetails}>
        <SheetContent side="bottom" className="rounded-t-[32px] border-t border-border px-6 pb-10 pt-6">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-brand-red">
              {profile.name}, {profile.age}
            </SheetTitle>
            <SheetDescription>{profile.occupation} · {profile.distance} km</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-foreground/80">{profile.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-brand-soft px-3 py-1.5 text-xs font-medium text-brand-red border border-brand-red/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SwipeCard;
