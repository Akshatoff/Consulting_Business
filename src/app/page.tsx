import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero /> 
      <SectionTitle
        preTitle="What we offer"
        title=" About us"
        
      >
        Our consulting services provide tailored solutions that enhance efficiency, foster growth, and drive innovation. With expert guidance, businesses gain clarity in decision-making, streamline operations, and achieve sustainable success. 
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="See How We Really Work"
      >
       We believe in having complete transparency and the best way to ensure that is to show our clients how we really work in behind the scene, so that you can find if we are right for you.
      </SectionTitle>

      <Video videoId="D0UnqGm_miA?si=X5xKQYj5Ne5DW292" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Our Clients are extremely happy to use our consulting services and here is what they say about us.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Have Any Question, See If We Can Answer the Question Here.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
