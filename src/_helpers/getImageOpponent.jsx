import SoldatImage from "../assets/donjon/soldat-fourmi.png";
import ColonelImage from "../assets/donjon/colonel-fourmi.png";
import RoiImage from "../assets/donjon/roi-fourmi.png";

const GetImageOpponent = (opponent) => {
    let opponentImage;

    switch (opponent) {
        case 'soldat-fourmi':
            opponentImage = SoldatImage;
            break;
        case 'colonel-fourmi':
            opponentImage = ColonelImage;
            break;
        case 'roi-fourmi':
            opponentImage = RoiImage;
            break;
        default:
            opponentImage = SoldatImage;
            break;
    }
    return opponentImage;
};

export default GetImageOpponent;
