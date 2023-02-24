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

const blogs = [
  {
    name: "tolong letak gamber",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in, Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in, Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    imageUrl: ""
  },
  {
    name: "tolong letak gamber2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    imageUrl: ""
  }
];

export { productHomeSettings, topProductSettings, listedProductSettings, blogs };
