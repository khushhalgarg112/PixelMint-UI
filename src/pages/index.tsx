import FaqSection from "@/components/TestComponent";
import { Button } from "@/lib/components";
import { Geist, Geist_Mono } from "next/font/google";

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
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Button Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Button Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <h3 className="font-semibold">Default</h3>
                <div className="space-y-2">
                  <Button variant="default" size="sm">Small</Button>
                  <Button variant="default" size="md">Medium</Button>
                  <Button variant="default" size="lg">Large</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Bordered</h3>
                <div className="space-y-2">
                  <Button variant="bordered" size="sm">Small</Button>
                  <Button variant="bordered" size="md">Medium</Button>
                  <Button variant="bordered" size="lg">Large</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Retro</h3>
                <div className="space-y-2">
                  <Button variant="retro" size="sm">Small</Button>
                  <Button variant="retro" size="md">Medium</Button>
                  <Button variant="retro" size="lg">Large</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Modern</h3>
                <div className="space-y-2">
                  <Button variant="modern" size="sm">Small</Button>
                  <Button variant="modern" size="md">Medium</Button>
                  <Button variant="modern" size="lg">Large</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Ghost</h3>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm">Small</Button>
                  <Button variant="ghost" size="md">Medium</Button>
                  <Button variant="ghost" size="lg">Large</Button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FaqSection />
        </div>
      </main >
    </div >
  );
}
