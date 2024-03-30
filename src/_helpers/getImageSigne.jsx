import LanceImage from "../assets/signes/lance.png";
import ArcImage from "../assets/signes/arc.png";
import BouclierImage from "../assets/signes/bouclier.png";

const GetImageSigne = (signe) => {
    let signeImage;

    switch (signe) {
        case 'lance':
            signeImage = LanceImage;
            break;
        case 'arc':
            signeImage = ArcImage;
            break;
        case 'bouclier':
            signeImage = BouclierImage;
            break;
        default:
            signeImage = "";
            break;
    }
    return signeImage;
};

export default GetImageSigne;
