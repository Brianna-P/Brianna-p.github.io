import ImageModel from "../models/Image.model";
import hacklahoma2023 from "../../assets/hacklahoma2023.jpg";
import firstOUgame from "../../assets/firstOUgame.jpg";


const getAllImages = () => {
    const image1 = new ImageModel("OU's Hacklahoma, 2023", hacklahoma2023);
    const image2 = new ImageModel("My first OU Football game, 2024", firstOUgame);


    return [image1, image2];
};

export default {getAllImages};