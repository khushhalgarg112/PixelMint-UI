import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/Button";
import { BoltIcon, BriefcaseIcon, FileTextIcon, RocketIcon, ShieldCheckIcon } from "lucide-react";
import { GlassRetroButton } from "@/components/GlassRetroButton";
import { ThreeDButton } from "@/components/ThreeDButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <main className="p-10">
        <h1>Modern Design Based on Shadcn, ChakraUI  tce</h1>
        <div className="space-y-4 flex gap-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link" size="sm">Learn More</Button>
          <Button variant="gradient" size="lg">Launch App</Button>
          <Button variant="neumorphic" icon={<RocketIcon size={16} />}>Power</Button>
          <Button loading>Saving...</Button>
          <Button size="icon" icon={<RocketIcon size={18} />} />
        </div>
        <div className="mt-10 space-y-4">
          <h1>Glassmorphism and Neon</h1>
          <div className="bg-gradient-to-tr from-zinc-900 to-zinc-800 p-8">
            <GlassRetroButton variant="glass" className="m-2">Glass Button</GlassRetroButton>
            <GlassRetroButton variant="neon" icon={<BoltIcon />}>Neon</GlassRetroButton>
          </div>
          <h1>Retro and Modern</h1>
          <div className="flex gap-4">
            <GlassRetroButton variant="retro">Retro</GlassRetroButton>
            <GlassRetroButton variant="modern">Modern</GlassRetroButton>
            <GlassRetroButton variant="outline">Outline</GlassRetroButton>
          </div>
          <h1>3D Button</h1>
          <div className="flex gap-6 p-10 bg-black min-h-screen items-start">
            <ThreeDButton
              label="Documents"
              icon={<FileTextIcon className="w-10 h-10 text-pink-500" />}
            />
            <ThreeDButton
              label="Projects"
              icon={<BriefcaseIcon className="w-10 h-10 text-yellow-500" />}
            />
          </div>

        </div>
      </main>
    </div>
  );
}
