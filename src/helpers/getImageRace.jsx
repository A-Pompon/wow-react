import SorcierImage from "../assets/races/sorcier.png";
import AlchimisteImage from "../assets/races/alchimiste.png";
import GuerrierImage from "../assets/races/guerrier.png";
import EnchanteurImage from "../assets/races/enchanteur.png";
import EspionImage from "../assets/races/espion.png";

const getImageRace = (race) => {
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

export default getImageRace;
