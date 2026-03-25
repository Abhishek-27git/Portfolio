import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "./ui/fade-in";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <FadeInStagger className={cn("container pt-0 pb-4 md:pt-0 md:pb-6 lg:pt-0 lg:pb-8", className)} {...props}>
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        {children}
      </div>
    </FadeInStagger>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <FadeIn>
      <h1
        className={cn(
          "text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
          className
        )}
        {...props}
      />
    </FadeIn>
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <FadeIn>
      <p
        className={cn(
          "max-w-[750px] text-center text-base font-light text-muted-foreground sm:text-lg sm:leading-8",
          className
        )}
        {...props}
      />
    </FadeIn>
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <FadeIn className="w-full">
      <div
        className={cn(
          "flex w-full items-center justify-center gap-4 py-4",
          className
        )}
        {...props}
      />
    </FadeIn>
  );
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
