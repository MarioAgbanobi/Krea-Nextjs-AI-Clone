type Slide = {
  id: number;
  heading: string;
  subheading: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  backgroundUrl: string;
  textColor: string;
  buttonStyle: string;
};

export const slides: Slide[] = [
    {
      id: 1,
      heading: "WAN 2.2",
      subheading: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      backgroundImage: "bg-gradient-to-r from-rose-300 via-teal-200 to-blue-200",
      backgroundUrl: "../images/64ac5a53-68e4-4588-8da5-227cfcd7bfdc.webp",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
    },
    {
      id: 2,
      heading: "Open Source",
      subheading: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Get Started",
      backgroundImage: "bg-gradient-to-r from-amber-700 via-orange-800 to-amber-900",
      backgroundUrl: "../images/piclumen-swiper-concept-art-2048x1170.webp",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
    },
  ];