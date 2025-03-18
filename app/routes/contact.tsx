import { format } from "date-fns";
import { Map } from "~/components/map/map";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";

export const loader = ({}: Route.LoaderArgs) => {
  const googleMapsKey = process.env.GOOGLE_MAPS_KEY!;
  const renderedAt = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  return { googleMapsKey, renderedAt };
};

export default function Contact() {
  const { googleMapsKey, renderedAt } = useLoaderData<typeof loader>();

  return (
    <main className="flex-1 px-6">
      <div className="py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground">
              We'd love to hear from you. Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
          </div>
          <Map googleMapsKey={googleMapsKey} />
        </div>
      </div>
      <div id="rendered-at" className="text-right text-xs">
        {renderedAt}
      </div>
    </main>
  );
}
