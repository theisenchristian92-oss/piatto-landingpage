import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, webApplicationSchema, webSiteSchema } from "@/components/seo/schema";
import { LandingPage } from "@/components/landing/landing-page";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), webSiteSchema(), webApplicationSchema()]} />
      <LandingPage />
    </>
  );
}
