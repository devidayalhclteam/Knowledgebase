const productHomeSettings = {
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: false,
  pauseOnFocus: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    }
  ]
};

const topProductSettings = {
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  draggable: false,
  arrows: true,
  swipe: true,
  adaptiveHeight: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    }
  ]
};

const listedProductSettings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  draggable: false,
  arrows: false,
  swipe: true,
  adaptiveHeight: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true
      }
    }
  ]
};

const relatedProductsSettings = {
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  draggable: false,
  arrows: true,
  swipe: true,
  adaptiveHeight: true,
  centerMode: false,
  responsive: []
};

const blogs = [
  {
    name: "How AI is being used to improve mental health",
    description:
      "As we think of the role technology, especially in addressing the disbalance between available healthcare providers and increased demand of those services, AI and AI algorithms could play a role in reducing that gap. ",
    imageUrl: ""
  },
  {
    name: "Making Mathematics Accessible",
    description:
      "A number of access barriers contribute to the lack of accessible math education. Classroom material are not always adapted to formats such as braille, large print, materials suitable for a screen reader, auditory input, or a combination of these designs.",
    imageUrl: ""
  },
  {
    name: "Reinforcing our Commitment to Accessibility",
    description:
      "Is it estimated that in Japan, over 360,000 people are Deaf or Hard of Hearing – 70,000 of them use sign language as their primary form of communication, while the rest prefer written Japanese as the primary way of accessing content. ",
    imageUrl: ""
  },
  {
    name: "AI4Bharat’s research on resource scarcity in sign language",
    description:
      "There are more than 300 sign languages in use today around the world. A region’s sign language is linguistically different from its spoken language, for example American Sign Language (ASL) is different from spoken English, and signed English is not ASL.",
    imageUrl: ""
  },
  {
    name: "Mentra is Reimagining Neurodiverse Employment",
    description:
      "Mentra is addressing the bias in recruiting by creating a neurodiversity employment network built with universal design principles from the ground up.",
    imageUrl: ""
  },
  {
    name: "Better Together",
    description:
      "Building accessibility into your company starts by building a culture that embraces accessibility and disability. ",
    imageUrl: ""
  }
];

export { productHomeSettings, topProductSettings, listedProductSettings, relatedProductsSettings, blogs };
