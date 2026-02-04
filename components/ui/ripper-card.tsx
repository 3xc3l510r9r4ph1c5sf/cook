import Ripple from "@/components/magicui/ripple";

export function RippleCard() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-card-foreground p-5">
        Your business already has personality. We design the visual system that makes people feel it.
      </p>
      <Ripple />
    </div>
  );
}
