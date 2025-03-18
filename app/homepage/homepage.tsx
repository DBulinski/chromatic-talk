import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Homepage() {
  return (
    <section className="w-full py-12">
      <div className="w-full px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Find your next favorite car
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                This is just a chromatic test
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link to="/get-started">Search</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504455637435-8d1a13cd8a93?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
