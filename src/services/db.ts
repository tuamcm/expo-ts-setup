export interface IProduct {
  id: number;
  name: string;
  description: string;
  type: string;
  category: string;
  price: number;
  inStock: boolean;
  uri: string;
  status: string;
}

// export interface ICart extends IProduct {
//   quantity: number;
// }

export interface ICart {
  product: IProduct;
  quantity: number;
}

export const TEST_DATA = [
  {
    id: 1001,
    name: "JD 1001",
    type: "men",
    category: "shoes",
    price: 101,
    inStock: true,
    uri: "nike-jordan-001.png",
    status: "New",
    description:
      "JD 1001 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra vitae congue eu consequat. Laoreet suspendisse interdum consectetur libero. Nisl tincidunt eget nullam non. Blandit libero volutpat sed cras ornare. Eu facilisis sed odio morbi quis commodo odio. Nullam ac tortor vitae purus faucibus ornare suspendisse. Tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Placerat in egestas erat imperdiet sed. Molestie at elementum eu facilisis sed odio morbi quis commodo. Eu turpis egestas pretium aenean pharetra magna ac placerat. A lacus vestibulum sed arcu non odio euismod lacinia. Ut pharetra sit amet aliquam. Eget arcu dictum varius duis. Sed libero enim sed faucibus turpis in eu.",
  },
  {
    id: 1002,
    name: "JD 1002",
    type: "men",
    category: "shoes",
    price: 201,
    inStock: true,
    uri: "nike-jordan-001.png",
    status: "Best Seller",
    description:
      "JD 1002 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra vitae congue eu consequat. Laoreet suspendisse interdum consectetur libero. Nisl tincidunt eget nullam non. Blandit libero volutpat sed cras ornare. Eu facilisis sed odio morbi quis commodo odio. Nullam ac tortor vitae purus faucibus ornare suspendisse. Tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Placerat in egestas erat imperdiet sed. Molestie at elementum eu facilisis sed odio morbi quis commodo. Eu turpis egestas pretium aenean pharetra magna ac placerat. A lacus vestibulum sed arcu non odio euismod lacinia. Ut pharetra sit amet aliquam. Eget arcu dictum varius duis. Sed libero enim sed faucibus turpis in eu.",
  },
  {
    id: 1003,
    name: "JD 1003",
    type: "men",
    category: "shoes",
    price: 301,
    inStock: false,
    uri: "nike-jordan-001.png",
    status: "Best Seller",
    description:
      "JD 1003 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra vitae congue eu consequat. Laoreet suspendisse interdum consectetur libero. Nisl tincidunt eget nullam non. Blandit libero volutpat sed cras ornare. Eu facilisis sed odio morbi quis commodo odio. Nullam ac tortor vitae purus faucibus ornare suspendisse. Tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Placerat in egestas erat imperdiet sed. Molestie at elementum eu facilisis sed odio morbi quis commodo. Eu turpis egestas pretium aenean pharetra magna ac placerat. A lacus vestibulum sed arcu non odio euismod lacinia. Ut pharetra sit amet aliquam. Eget arcu dictum varius duis. Sed libero enim sed faucibus turpis in eu.",
  },
  {
    id: 1004,
    name: "JD 1004",
    type: "men",
    category: "shoes",
    price: 401,
    inStock: true,
    uri: "nike-jordan-001.png",
    status: "New",
    description:
      "JD 1004 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra vitae congue eu consequat. Laoreet suspendisse interdum consectetur libero. Nisl tincidunt eget nullam non. Blandit libero volutpat sed cras ornare. Eu facilisis sed odio morbi quis commodo odio. Nullam ac tortor vitae purus faucibus ornare suspendisse. Tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Placerat in egestas erat imperdiet sed. Molestie at elementum eu facilisis sed odio morbi quis commodo. Eu turpis egestas pretium aenean pharetra magna ac placerat. A lacus vestibulum sed arcu non odio euismod lacinia. Ut pharetra sit amet aliquam. Eget arcu dictum varius duis. Sed libero enim sed faucibus turpis in eu.",
  },
  {
    id: 1005,
    name: "JD 1005",
    type: "men",
    category: "shoes",
    price: 501,
    inStock: true,
    uri: "nike-jordan-001.png",
    status: "Best Seller",
    description:
      "JD 1005 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra vitae congue eu consequat. Laoreet suspendisse interdum consectetur libero. Nisl tincidunt eget nullam non. Blandit libero volutpat sed cras ornare. Eu facilisis sed odio morbi quis commodo odio. Nullam ac tortor vitae purus faucibus ornare suspendisse. Tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Placerat in egestas erat imperdiet sed. Molestie at elementum eu facilisis sed odio morbi quis commodo. Eu turpis egestas pretium aenean pharetra magna ac placerat. A lacus vestibulum sed arcu non odio euismod lacinia. Ut pharetra sit amet aliquam. Eget arcu dictum varius duis. Sed libero enim sed faucibus turpis in eu.",
  },
  {
    id: 1006,
    name: "JD 1006",
    type: "men",
    category: "shoes",
    price: 601,
    inStock: true,
    uri: "nike-jordan-001.png",
    status: "Trending",
    description:
      "JD 1006 description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra vitae congue eu consequat. Laoreet suspendisse interdum consectetur libero. Nisl tincidunt eget nullam non. Blandit libero volutpat sed cras ornare. Eu facilisis sed odio morbi quis commodo odio. Nullam ac tortor vitae purus faucibus ornare suspendisse. Tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Placerat in egestas erat imperdiet sed. Molestie at elementum eu facilisis sed odio morbi quis commodo. Eu turpis egestas pretium aenean pharetra magna ac placerat. A lacus vestibulum sed arcu non odio euismod lacinia. Ut pharetra sit amet aliquam. Eget arcu dictum varius duis. Sed libero enim sed faucibus turpis in eu.",
  },
];
