import { useState } from "react";
import { myProfile } from "@/data/mockData";
import { Settings, ChevronRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import AppHeader from "@/components/AppHeader";

const Profile = () => {
  const [bio, setBio] = useState(myProfile.bio);
  const [distance, setDistance] = useState([0, 25]);
  const [ageRange, setAgeRange] = useState([18, 29]);

  return (
    <div className="mx-auto flex h-[calc(100dvh-60px)] max-w-lg flex-col overflow-y-auto pb-20 pt-2">
      <AppHeader title="meu perfil" />

      {/* Photo + Name */}
      <div className="flex flex-col items-center px-4 pt-2 pb-6">
        <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-brand-red/20 p-1">
          <img
            src={myProfile.photos[0]}
            alt={myProfile.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-foreground">
          {myProfile.name}, {myProfile.age}
        </h2>
        <p className="text-sm text-muted-foreground">{myProfile.occupation}</p>
      </div>

      <div className="space-y-6 px-4 pb-20">
        {/* Bio */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Sobre mim
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-foreground transition-colors"
            rows={3}
          />
        </div>

        {/* Interests */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Interesses
          </label>
          <div className="flex flex-wrap gap-2">
            {myProfile.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-brand-red border border-brand-red/30"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Discovery settings */}
        <div>
          <label className="mb-4 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Configurações de busca
          </label>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-foreground">Distância máxima</span>
                <span className="text-sm font-medium text-foreground">{distance[0]} - {distance[1]} km</span>
              </div>
              <Slider
                value={distance}
                onValueChange={setDistance}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-foreground">Faixa de idade</span>
                <span className="text-sm font-medium text-foreground">
                  {ageRange[0]} - {ageRange[1]}
                </span>
              </div>
              <Slider
                value={ageRange}
                onValueChange={setAgeRange}
                max={60}
                min={18}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-0 rounded-2xl border border-border">
          {["Verificação do perfil", "Notificações", "Privacidade"].map(
            (item, i) => (
              <button
                key={item}
                className={`flex w-full items-center justify-between px-4 py-3.5 text-sm text-foreground ${i < 2 ? "border-b border-border" : ""
                  }`}
              >
                {item}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
