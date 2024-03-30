import SorcierImage from "../assets/races/sorcier-transparent.png";
import AlchimisteImage from "../assets/races/alchimiste-transparent.png";
import GuerrierImage from "../assets/races/guerrier-transparent.png";
import EnchanteurImage from "../assets/races/enchanteur-transparent.png";
import EspionImage from "../assets/races/espion-transparent.png";

const getImageRaceT = (race) => {
    let roleImage;

    switch (race) {
        case 'alchimiste':
            roleImage = AlchimisteImage;
            break;
        case 'sorcier':
            roleImage = SorcierImage;
            break;
        case 'guerrier':
            roleImage = GuerrierImage;
            break;
        case 'enchanteur':
            roleImage = EnchanteurImage;
            break;
        case 'espion':
            roleImage = EspionImage;
            break;
        default:
            roleImage = SorcierImage;
            break;
    }
    return roleImage;
};

export default getImageRaceT;
