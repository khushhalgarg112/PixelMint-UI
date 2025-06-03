import FaqSection from "@/components/TestComponent";
import { Button, Input, Tooltip } from "@/lib/components";
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

          {/* Input Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Input Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Default</h3>
                  <Input
                    variant="default"
                    label="Default Input"
                    placeholder="Type something..."
                  />
                  <Input
                    variant="default"
                    label="With Error"
                    error="This field is required"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Bordered</h3>
                  <Input
                    variant="bordered"
                    label="Bordered Input"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Ghost</h3>
                  <Input
                    variant="ghost"
                    label="Ghost Input"
                    placeholder="Type something..."
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Retro</h3>
                  <Input
                    variant="retro"
                    label="Retro Input"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Modern</h3>
                  <Input
                    variant="modern"
                    label="Modern Input"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Different Sizes</h3>
                  <Input
                    variant="default"
                    size="sm"
                    label="Small Input"
                    placeholder="Small..."
                  />
                  <Input
                    variant="default"
                    size="md"
                    label="Medium Input"
                    placeholder="Medium..."
                  />
                  <Input
                    variant="default"
                    size="lg"
                    label="Large Input"
                    placeholder="Large..."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Tooltip Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Tooltip Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold">Default</h3>
                <div className="flex justify-center">
                  <Tooltip content="This is a default tooltip" delayDuration={100}>
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Bordered</h3>
                <div className="flex justify-center">
                  <Tooltip variant="bordered" content="This is a bordered tooltip" delayDuration={100}>
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Ghost</h3>
                <div className="flex justify-center">
                  <Tooltip variant="ghost" content="This is a ghost tooltip" delayDuration={100}>
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Retro</h3>
                <div className="flex justify-center">
                  <Tooltip variant="retro" content="This is a retro tooltip" delayDuration={100}>
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Modern</h3>
                <div className="flex justify-center">
                  <Tooltip variant="modern" content="This is a modern tooltip" delayDuration={100}>
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Different Positions</h3>
                <div className="flex justify-center gap-4">
                  <Tooltip content="Top tooltip" side="top" delayDuration={100}>
                    <Button variant="default">Top</Button>
                  </Tooltip>
                  <Tooltip content="Bottom tooltip" side="bottom" delayDuration={100}>
                    <Button variant="default">Bottom</Button>
                  </Tooltip>
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
