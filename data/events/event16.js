//import categories from "../categories";
//import locations from "../locations";

const image00001 = {
    source: "imgix-six",
    path: "aj-roberts-mansah-fr-promotions-dev1.jpeg",
    w: 1080,
    h: 1220,
    alt: "AJ Roberts"
};

const event16 = {
  handle: "aj-roberts",
  image: image00001,
  coverMode: "IMAGE_TEXT",
    date:"2022-05-01",
    time: {
        start: "5:30",
        end: ""
    },
  location: "avantay",
  title: "AJ Roberts",
  shortDescription: "jhvj jhbh",
  //tickets_link: "https://www.mrajroberts.com/product/the-aj-roberts-show-uk-tour-leicester-tickets/",
  //categories: [categories[0], categories[3], categories[2], categories[4]],

  description: {
    rows:[
      {
        title: `Industry`,
        text: `Technology`
      },{
        title: `Location`,
        text: `Los Angeles`
      },{
        title: `Year`,
        text: `2019`
      },{
        title: `Scope`,
        text: `<p>Research & Strategy<br />
                    Identity Design<br />
                    Digital & Product Design<br />
                    Packaging & Print<br />
                    Art Direction<br />
                    Content Creation<br /></p>
                  `
      }
    ],
    text:`<p>
                The starting point was a user-generated library of inspiring A-Joint images. By making the metadata of the furniture in the images visible, customers can explore details such as texture, materials and dimensions. This can then be used as a foundation to compare and customise new pieces of furniture according to their own needs.
              </p><p>
                A-Joint is a utilitarian joinery system that connects standardised timbers to create functional furniture. With consistently high demand, configuring A-Joint furniture for residential and commercial spaces consumed nearly all the time of its designer, Henry Wilson, and the process for both customer and designer lacked efficiency. Maud was asked to build a website that would streamline the process and enable A-Joint to function efficiently and independently of Henry.
              </p>`,
    extraText: `<p>
                The starting point was a user-generated library of inspiring A-Joint images. By making the metadata of the furniture in the images visible, customers can explore details such as texture, materials and dimensions. This can then be used as a foundation to compare and customise new pieces of furniture according to their own needs.</p>
    `
  },
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

  ]
};

export default event16
