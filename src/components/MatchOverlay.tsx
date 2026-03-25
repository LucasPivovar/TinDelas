import { motion, AnimatePresence } from "framer-motion";
import { Profile } from "@/data/mockData";
import { myProfile } from "@/data/mockData";

interface MatchOverlayProps {
  show: boolean;
  profile: Profile;
  onClose: () => void;
}

const MatchOverlay = ({ show, profile, onClose }: MatchOverlayProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.h1
            className="mb-10 text-5xl font-black text-white drop-shadow-[0_2px_10px_rgba(255,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            É um match!
          </motion.h1>

          <div className="flex items-center gap-[-20px]">
            <motion.div
              className="h-24 w-24 overflow-hidden rounded-full border-[4px] border-brand-red"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 12 }}
            >
              <img
                src={myProfile.photos[0]}
                alt="Você"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="-ml-6 h-24 w-24 overflow-hidden rounded-full border-[4px] border-brand-black"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 12 }}
            >
              <img
                src={profile.photos[0]}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <motion.p
            className="mt-6 text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Você e {profile.name} curtiram um ao outro
          </motion.p>

          <motion.button
            className="mt-8 rounded-full bg-brand-red px-10 py-4 text-sm font-bold text-white shadow-xl shadow-brand-red/20 transition-transform active:scale-95 hover:bg-black transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onClose}
          >
            Enviar mensagem
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatchOverlay;
