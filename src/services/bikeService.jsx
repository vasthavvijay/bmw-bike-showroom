export const bikesData = [
  {
    id: 1,
    name: "BMW S 1000 RR",
    price: "₹21 - ₹27 Lakhs",
    engine: "999 cc",
    power: "206 HP",
    speed: "303 km/h",
    color: "M Motorsport",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39"
  },
  {
    id: 2,
    name: "BMW R 1250 GS",
    price: "₹20 Lakhs",
    engine: "1254 cc",
    power: "136 HP",
    speed: "200 km/h",
    color: "Triple Black",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6"
  },
  {
    id: 3,
    name: "BMW G 310 R",
    price: "₹3.5 Lakhs",
    engine: "313 cc",
    power: "34 HP",
    speed: "143 km/h",
    color: "Sport Red",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "BMW M 1000 RR",
    price: "₹49 Lakhs",
    engine: "999 cc",
    power: "212 HP",
    speed: "314 km/h",
    color: "M Competition",
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d"
  },
  {
    id: 5,
    name: "BMW F 900 GS",
    price: "₹14 Lakhs",
    engine: "895 cc",
    power: "105 HP",
    speed: "200 km/h",
    color: "Racing Blue",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"
  }
];

export const getBikes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return bikesData;
};