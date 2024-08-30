import ImageModel from "../models/Image.model";
import hacklahoma2023 from "../../assets/hacklahoma2023.jpg";
import firstOUgame from "../../assets/firstOUgame.jpg";
import intern from "../../assets/intern.jpg";



const getAllImages = () => {
    const image1 = new ImageModel("OU's Hacklahoma, 2023", hacklahoma2023);
    const image2 = new ImageModel("My first OU Football game, 2024", firstOUgame);
    const image3 = new ImageModel("Interning at Tinker AFB, 2024", intern);



    return [image1, image2, image3];
};

export default {getAllImages};