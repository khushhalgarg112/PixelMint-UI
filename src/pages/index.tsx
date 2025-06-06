import FaqSection from "@/components/TestComponent";
import {
  Button,
  Input,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTrigger,
  Skeleton,
  SkeletonCard,
  SkeletonLines,
  SkeletonTable,
  SkeletonGroup,
} from "@/lib/components";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { Textarea } from '@/lib/components/textarea';
import { Select } from "@/lib/components/select";
import { Radio } from "@/lib/components/radio";
import { Checkbox } from "@/lib/components/checkbox";
import { Slider } from "@/lib/components/slider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [dialogStates, setDialogStates] = useState({
    default: false,
    bordered: false,
    ghost: false,
    retro: false,
    modern: false,
  });

  const [showSkeletons, setShowSkeletons] = useState(true);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [checked, setChecked] = useState(false);

  const openDialog = (variant) => {
    setDialogStates((prev) => ({ ...prev, [variant]: true }));
  };

  const closeDialog = (variant) => {
    setDialogStates((prev) => ({ ...prev, [variant]: false }));
  };

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
                  <Button variant="default" size="sm">
                    Small
                  </Button>
                  <Button variant="default" size="md">
                    Medium
                  </Button>
                  <Button variant="default" size="lg">
                    Large
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Bordered</h3>
                <div className="space-y-2">
                  <Button variant="bordered" size="sm">
                    Small
                  </Button>
                  <Button variant="bordered" size="md">
                    Medium
                  </Button>
                  <Button variant="bordered" size="lg">
                    Large
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Retro</h3>
                <div className="space-y-2">
                  <Button variant="retro" size="sm">
                    Small
                  </Button>
                  <Button variant="retro" size="md">
                    Medium
                  </Button>
                  <Button variant="retro" size="lg">
                    Large
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Modern</h3>
                <div className="space-y-2">
                  <Button variant="modern" size="sm">
                    Small
                  </Button>
                  <Button variant="modern" size="md">
                    Medium
                  </Button>
                  <Button variant="modern" size="lg">
                    Large
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Ghost</h3>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm">
                    Small
                  </Button>
                  <Button variant="ghost" size="md">
                    Medium
                  </Button>
                  <Button variant="ghost" size="lg">
                    Large
                  </Button>
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
                  <Tooltip
                    content="This is a default tooltip"
                    delayDuration={100}
                  >
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Bordered</h3>
                <div className="flex justify-center">
                  <Tooltip
                    variant="bordered"
                    content="This is a bordered tooltip"
                    delayDuration={100}
                  >
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Ghost</h3>
                <div className="flex justify-center">
                  <Tooltip
                    variant="ghost"
                    content="This is a ghost tooltip"
                    delayDuration={100}
                  >
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Retro</h3>
                <div className="flex justify-center">
                  <Tooltip
                    variant="retro"
                    content="This is a retro tooltip"
                    delayDuration={100}
                  >
                    <Button variant="default">Hover me</Button>
                  </Tooltip>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Modern</h3>
                <div className="flex justify-center">
                  <Tooltip
                    variant="modern"
                    content="This is a modern tooltip"
                    delayDuration={100}
                  >
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
                  <Tooltip
                    content="Bottom tooltip"
                    side="bottom"
                    delayDuration={100}
                  >
                    <Button variant="default">Bottom</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </section>

          {/* Dialog Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Dialog Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Default Dialog */}
              <div className="space-y-4">
                <h3 className="font-semibold">Default</h3>
                <div className="flex justify-center">
                  <Button
                    variant="default"
                    onClick={() => openDialog("default")}
                  >
                    Open Default Dialog
                  </Button>
                </div>
                <Dialog
                  open={dialogStates.default}
                  onOpenChange={() => closeDialog("default")}
                  variant="default"
                  size="md"
                >
                  <DialogContent
                    title="Default Dialog"
                    description="This is a default styled dialog with clean styling."
                    footer={
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          onClick={() => closeDialog("default")}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="default"
                          onClick={() => closeDialog("default")}
                        >
                          Confirm
                        </Button>
                      </div>
                    }
                  >
                    <p>
                      This is the main content of the default dialog. It
                      provides a clean and simple interface for user
                      interactions.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Bordered Dialog */}
              <div className="space-y-4">
                <h3 className="font-semibold">Bordered</h3>
                <div className="flex justify-center">
                  <Button
                    variant="bordered"
                    onClick={() => openDialog("bordered")}
                  >
                    Open Bordered Dialog
                  </Button>
                </div>
                <Dialog
                  open={dialogStates.bordered}
                  onOpenChange={() => closeDialog("bordered")}
                  variant="bordered"
                  size="md"
                >
                  <DialogContent
                    title="Bordered Dialog"
                    description="This dialog features a prominent border design."
                    footer={
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          onClick={() => closeDialog("bordered")}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="bordered"
                          onClick={() => closeDialog("bordered")}
                        >
                          Confirm
                        </Button>
                      </div>
                    }
                  >
                    <p>
                      The bordered dialog variant adds visual emphasis with
                      enhanced borders and shadows.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Ghost Dialog */}
              <div className="space-y-4">
                <h3 className="font-semibold">Ghost</h3>
                <div className="flex justify-center">
                  <Button variant="ghost" onClick={() => openDialog("ghost")}>
                    Open Ghost Dialog
                  </Button>
                </div>
                <Dialog
                  open={dialogStates.ghost}
                  onOpenChange={() => closeDialog("ghost")}
                  variant="ghost"
                  size="md"
                >
                  <DialogContent
                    title="Ghost Dialog"
                    description="A subtle dialog with backdrop blur effects."
                    footer={
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          onClick={() => closeDialog("ghost")}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="default"
                          onClick={() => closeDialog("ghost")}
                        >
                          Confirm
                        </Button>
                      </div>
                    }
                  >
                    <p>
                      The ghost dialog creates a subtle, translucent appearance
                      with beautiful backdrop blur effects.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Retro Dialog */}
              <div className="space-y-4">
                <h3 className="font-semibold">Retro</h3>
                <div className="flex justify-center">
                  <Button variant="retro" onClick={() => openDialog("retro")}>
                    Open Retro Dialog
                  </Button>
                </div>
                <Dialog
                  open={dialogStates.retro}
                  onOpenChange={() => closeDialog("retro")}
                  variant="retro"
                  size="md"
                >
                  <DialogContent
                    title="Retro Dialog"
                    description="Vintage-inspired design with bold shadows."
                    footer={
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          onClick={() => closeDialog("retro")}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="retro"
                          onClick={() => closeDialog("retro")}
                        >
                          Confirm
                        </Button>
                      </div>
                    }
                  >
                    <p>
                      The retro dialog brings back the classic computing
                      aesthetic with bold borders and distinctive shadows.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Modern Dialog */}
              <div className="space-y-4">
                <h3 className="font-semibold">Modern</h3>
                <div className="flex justify-center">
                  <Button variant="modern" onClick={() => openDialog("modern")}>
                    Open Modern Dialog
                  </Button>
                </div>
                <Dialog
                  open={dialogStates.modern}
                  onOpenChange={() => closeDialog("modern")}
                  variant="modern"
                  size="md"
                >
                  <DialogContent
                    title="Modern Dialog"
                    description="Sleek gradient design for contemporary interfaces."
                    footer={
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          onClick={() => closeDialog("modern")}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="modern"
                          onClick={() => closeDialog("modern")}
                        >
                          Confirm
                        </Button>
                      </div>
                    }
                  >
                    <p>
                      The modern dialog features elegant gradients and
                      contemporary styling perfect for modern applications.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Dialog Sizes Demo */}
              <div className="space-y-4">
                <h3 className="font-semibold">Different Sizes</h3>
                <div className="flex flex-col space-y-2">
                  <Button size="sm" onClick={() => openDialog("sizeDemo")}>
                    Size Demo
                  </Button>
                </div>
                <Dialog
                  open={dialogStates.sizeDemo}
                  onOpenChange={() => closeDialog("sizeDemo")}
                  variant="default"
                  size="xl"
                >
                  <DialogContent
                    title="Dialog Sizes"
                    description="This dialog demonstrates the XL size option."
                    footer={
                      <Button
                        variant="default"
                        onClick={() => closeDialog("sizeDemo")}
                      >
                        Close
                      </Button>
                    }
                  >
                    <div className="space-y-4">
                      <p>Dialogs come in multiple sizes:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>
                          <strong>sm</strong> - Small, compact dialogs
                        </li>
                        <li>
                          <strong>md</strong> - Medium, default size
                        </li>
                        <li>
                          <strong>lg</strong> - Large dialogs for more content
                        </li>
                        <li>
                          <strong>xl</strong> - Extra large for complex forms
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>

          {/* Skeleton Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">
              Skeleton Variants
            </h2>

            {/* Toggle Button */}
            <div className="flex justify-center">
              <Button
                variant="default"
                onClick={() => setShowSkeletons(!showSkeletons)}
              >
                {showSkeletons ? "Hide" : "Show"} Skeletons
              </Button>
            </div>

            {showSkeletons && (
              <div className="space-y-12">
                {/* Basic Skeleton Shapes */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">
                    Basic Skeleton Shapes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {["default", "bordered", "ghost", "retro", "modern"].map(
                      (variant) => (
                        <div key={variant} className="space-y-4">
                          <h4 className="font-medium capitalize">{variant}</h4>
                          <div className="space-y-3">
                            <Skeleton
                              variant={variant}
                              shape="rectangle"
                              width="100%"
                              height="20px"
                            />
                            <Skeleton
                              variant={variant}
                              shape="rounded"
                              width="80%"
                              height="16px"
                            />
                            <Skeleton
                              variant={variant}
                              shape="pill"
                              width="60%"
                              height="12px"
                            />
                            <Skeleton
                              variant={variant}
                              shape="circle"
                              width="40px"
                              height="40px"
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Skeleton Cards */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Skeleton Cards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["default", "bordered", "retro"].map((variant) => (
                      <div key={variant} className="space-y-2">
                        <h4 className="font-medium capitalize">
                          {variant} Card
                        </h4>
                        <SkeletonCard
                          variant={variant}
                          showAvatar={true}
                          showTitle={true}
                          showSubtitle={true}
                          showContent={true}
                          contentLines={3}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skeleton Lines */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Skeleton Text Lines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Default Lines</h4>
                      <SkeletonLines variant="default" lines={4} />
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Modern Lines</h4>
                      <SkeletonLines variant="modern" lines={4} />
                    </div>
                  </div>
                </div>

                {/* Skeleton Tables */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Skeleton Tables</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Bordered Table</h4>
                      <SkeletonTable
                        variant="bordered"
                        rows={4}
                        columns={3}
                        showHeader={true}
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Retro Table</h4>
                      <SkeletonTable
                        variant="retro"
                        rows={4}
                        columns={3}
                        showHeader={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Staggered Skeleton Groups */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">
                    Staggered Animation Groups
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Ghost Staggered</h4>
                      <SkeletonGroup
                        variant="ghost"
                        stagger={true}
                        staggerDelay={0.1}
                      >
                        <Skeleton size="lg" width="90%" />
                        <Skeleton size="md" width="75%" />
                        <Skeleton size="md" width="85%" />
                        <Skeleton size="sm" width="60%" />
                      </SkeletonGroup>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Modern Staggered</h4>
                      <SkeletonGroup
                        variant="modern"
                        stagger={true}
                        staggerDelay={0.15}
                      >
                        <Skeleton size="xl" width="100%" />
                        <Skeleton size="lg" width="80%" />
                        <Skeleton size="md" width="70%" />
                        <Skeleton size="sm" width="50%" />
                      </SkeletonGroup>
                    </div>
                  </div>
                </div>

                {/* Mixed Content Skeleton */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">
                    Complex Layout Skeletons
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Article Layout */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Article Layout</h4>
                      <div className="space-y-4 p-6 border rounded-xl">
                        <Skeleton
                          variant="default"
                          width="100%"
                          height="200px"
                          shape="rounded"
                        />
                        <Skeleton variant="default" size="xl" width="80%" />
                        <Skeleton variant="default" size="sm" width="40%" />
                        <SkeletonLines variant="default" lines={3} />
                        <div className="flex items-center space-x-3 pt-4">
                          <Skeleton
                            variant="default"
                            shape="circle"
                            width="32px"
                            height="32px"
                          />
                          <div className="space-y-1">
                            <Skeleton
                              variant="default"
                              size="sm"
                              width="100px"
                            />
                            <Skeleton
                              variant="default"
                              size="sm"
                              width="80px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Layout */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Dashboard Layout</h4>
                      <div className="space-y-4 p-6 border rounded-xl">
                        <div className="grid grid-cols-3 gap-4">
                          <Skeleton
                            variant="bordered"
                            width="100%"
                            height="80px"
                            shape="rounded"
                          />
                          <Skeleton
                            variant="bordered"
                            width="100%"
                            height="80px"
                            shape="rounded"
                          />
                          <Skeleton
                            variant="bordered"
                            width="100%"
                            height="80px"
                            shape="rounded"
                          />
                        </div>
                        <Skeleton
                          variant="bordered"
                          width="100%"
                          height="120px"
                          shape="rounded"
                        />
                        <SkeletonTable
                          variant="bordered"
                          rows={3}
                          columns={4}
                          showHeader={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* FAQ Section */}
          <FaqSection />

          {/* Textarea Component */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Textarea Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Default</h3>
                  <Textarea
                    variant="default"
                    label="Default Textarea"
                    placeholder="Type something..."
                  />
                  <Textarea
                    variant="default"
                    label="With Error"
                    error="This field is required"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Bordered</h3>
                  <Textarea
                    variant="bordered"
                    label="Bordered Textarea"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Ghost</h3>
                  <Textarea
                    variant="ghost"
                    label="Ghost Textarea"
                    placeholder="Type something..."
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Retro</h3>
                  <Textarea
                    variant="retro"
                    label="Retro Textarea"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Modern</h3>
                  <Textarea
                    variant="modern"
                    label="Modern Textarea"
                    placeholder="Type something..."
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Different Sizes</h3>
                  <Textarea
                    variant="default"
                    size="sm"
                    label="Small Textarea"
                    placeholder="Small..."
                  />
                  <Textarea
                    variant="default"
                    size="md"
                    label="Medium Textarea"
                    placeholder="Medium..."
                  />
                  <Textarea
                    variant="default"
                    size="lg"
                    label="Large Textarea"
                    placeholder="Large..."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Select Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Select Variants</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Select variant="default" label="Default Select">
                <Select.Item value="option1">Option 1</Select.Item>
                <Select.Item value="option2">Option 2</Select.Item>
                <Select.Item value="option3">Option 3</Select.Item>
              </Select>

              <Select variant="bordered" label="Bordered Select">
                <Select.Item value="option1">Option 1</Select.Item>
                <Select.Item value="option2">Option 2</Select.Item>
                <Select.Item value="option3">Option 3</Select.Item>
              </Select>

              <Select variant="ghost" label="Ghost Select">
                <Select.Item value="option1">Option 1</Select.Item>
                <Select.Item value="option2">Option 2</Select.Item>
                <Select.Item value="option3">Option 3</Select.Item>
              </Select>

              <Select variant="retro" label="Retro Select">
                <Select.Item value="option1">Option 1</Select.Item>
                <Select.Item value="option2">Option 2</Select.Item>
                <Select.Item value="option3">Option 3</Select.Item>
              </Select>

              <Select variant="modern" label="Modern Select">
                <Select.Item value="option1">Option 1</Select.Item>
                <Select.Item value="option2">Option 2</Select.Item>
                <Select.Item value="option3">Option 3</Select.Item>
              </Select>
            </div>
          </section>

          {/* Checkbox Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Checkbox Variants</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Checkbox
                variant="default"
                label="Default Checkbox"
                checked={checked}
                onCheckedChange={setChecked}
              />

              <Checkbox
                variant="bordered"
                label="Bordered Checkbox"
                checked={checked}
                onCheckedChange={setChecked}
              />

              <Checkbox
                variant="ghost"
                label="Ghost Checkbox"
                checked={checked}
                onCheckedChange={setChecked}
              />

              <Checkbox
                variant="retro"
                label="Retro Checkbox"
                checked={checked}
                onCheckedChange={setChecked}
              />

              <Checkbox
                variant="modern"
                label="Modern Checkbox"
                checked={checked}
                onCheckedChange={setChecked}
              />
            </div>
          </section>

          {/* Slider Showcase */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Slider</h2>
            <div className="grid gap-8">
              {/* Default Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Default Slider</h3>
                <div className="grid gap-4">
                  <Slider label="Volume" showValue />
                  <Slider label="Brightness" showValue defaultValue={[75]} />
                  <Slider label="Temperature" showValue defaultValue={[25]} />
                </div>
              </div>

              {/* Bordered Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Bordered Slider</h3>
                <div className="grid gap-4">
                  <Slider variant="bordered" label="Volume" showValue />
                  <Slider variant="bordered" label="Brightness" showValue defaultValue={[75]} />
                  <Slider variant="bordered" label="Temperature" showValue defaultValue={[25]} />
                </div>
              </div>

              {/* Ghost Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Ghost Slider</h3>
                <div className="grid gap-4">
                  <Slider variant="ghost" label="Volume" showValue />
                  <Slider variant="ghost" label="Brightness" showValue defaultValue={[75]} />
                  <Slider variant="ghost" label="Temperature" showValue defaultValue={[25]} />
                </div>
              </div>

              {/* Retro Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Retro Slider</h3>
                <div className="grid gap-4">
                  <Slider variant="retro" label="Volume" showValue />
                  <Slider variant="retro" label="Brightness" showValue defaultValue={[75]} />
                  <Slider variant="retro" label="Temperature" showValue defaultValue={[25]} />
                </div>
              </div>

              {/* Modern Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Modern Slider</h3>
                <div className="grid gap-4">
                  <Slider variant="modern" label="Volume" showValue />
                  <Slider variant="modern" label="Brightness" showValue defaultValue={[75]} />
                  <Slider variant="modern" label="Temperature" showValue defaultValue={[25]} />
                </div>
              </div>

              {/* Size Variants */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Size Variants</h3>
                <div className="grid gap-4">
                  <Slider size="sm" label="Small" showValue />
                  <Slider size="md" label="Medium" showValue />
                  <Slider size="lg" label="Large" showValue />
                </div>
              </div>

              {/* States */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">States</h3>
                <div className="grid gap-4">
                  <Slider label="With Error" error="Value must be between 0 and 100" />
                  <Slider label="With Helper Text" helperText="Adjust the value using the slider" />
                  <Slider label="Disabled" disabled defaultValue={[50]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
