import img1 from "./instagram.png";
import img2 from "./facebook.png";
import img3 from "./youtube.png";
import img4 from "./telegram.png";

type SocialLinks = {
    source: string,
    link: string
}

const logos: SocialLinks[] = [
    {source: img1, link: "https://www.instagram.com/nurturingiman/?hl=en"},
    {source: img2, link: "https://www.facebook.com/NurturingIman"},
    {source: img3, link: "https://www.youtube.com/channel/UCjMm08XlO-inSQokf465F0Q"},
    {source: img4, link: "https://t.me/nurturingiman"},
];

export default logos;