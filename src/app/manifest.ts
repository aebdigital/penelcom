import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Penelcom s.r.o.",
    short_name: "Penelcom",
    description: "Elektrotechnické služby, fotovoltika, NN rozvádzače a zabezpečovacie systémy.",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#efa947",
    lang: "sk",
  };
}
