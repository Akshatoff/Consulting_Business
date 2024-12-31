import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Choose Us",
  desc: "Whether you’re aiming to improve efficiency, increase profitability, or expand your market reach, we provide actionable insights and innovative solutions to meet your unique needs. Partner with us to transform challenges into opportunities and achieve measurable results.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert Insights and Knowledge",
      desc: "Consultants bring specialized expertise and industry knowledge",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Customized Solutions",
      desc: "Tailored strategies are developed based on the unique needs and goals of each client",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cost and Time Efficiency",
      desc: "Businesses can avoid costly mistakes and save time by leveraging the consultant’s experience",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Some More Benefits",
  desc: "Still not convinced about us, well here are some more benefits to ensure you that we are the  best in the market. ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Enhanced Problem-Solving",
      desc: "Consultants identify inefficiencies and offer actionable recommendations to resolve issues and improve performance.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Scalability and Growth",
      desc: "With the right guidance, businesses can scale operations, tap into new markets, and achieve sustainable growth.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Objective Analysis",
      desc: "Consultants provide unbiased assessments, enabling better decision-making and strategic planning. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
