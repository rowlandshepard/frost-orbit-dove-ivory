import { createFileRoute } from "@tanstack/react-router";
import { ConduitApp } from "@/components/conduit-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ConduitApp />;
}
