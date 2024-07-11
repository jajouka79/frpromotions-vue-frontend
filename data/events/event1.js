//import locations from "../locations";

const image00001 = {
    source: "imgix-six",
    path: "d&g-2021-08-07.jpg",
    w: 902,
    h: 1280,
    alt: "D&G"
};

export default {
  handle: "gathering-part2-dog-gun",
  image: image00001,
  title: "Gathering of Awakened Souls - Part 2",
  coverMode: "TEXT_IMAGE",
  date:"2021-08-07",
    time: {
      start: "13:00",
      end: "late"
    },
  location: "dog-gun",
  shortDescription: "Test description",
  description: {
    text:`<p>The starting point was a user-generated library of inspiring A-Joint images needs.</p>
          <p>
            Maud was asked to build a website that would streamline the process and enable A-Joint to function efficiently and independently of Henry.
          </p>`,
    extraText: ``
  },
  use_border: true,

  footer: {
    rows: [
      {
        title: "Industry",
        text: "Technology"
      },{
        title: "Location",
        text: "Los Angeles"
      },{
        title: "Year",
        text: "2019"
      },{
        title: "Scope",
        text: `Research & Strategy<br />
          Identity Design<br />
          Digital & Product Design<br />
          Packaging & Print<br />
          Art Direction<br />
          Content Creation<br />
        `
      }
    ]
  },
  sections: [
    {
      type: "SingleImage",
      params: {
        image:image00001,
      }
    },
    {
      type: "TwoImages",
      params: {
        images: [
          image00001,
          image00001
        ],
        smallSecondImage: true
      }
    },
    {
      type: "ThreeImages",
      params: {
        images: [
          image00001,
          image00001,
          image00001
        ]
      }
    },
  ]
}

