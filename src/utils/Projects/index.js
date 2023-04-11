import { Band, Gauge, Hoopla } from "../../img";

const Projects = [
    {
        title: "Band Site",
        to: "https://www.figma.com/proto/lkbPnwl2TOMaTFeqXHvPTg/Inspo-Board?page-id=0%3A1&node-id=1-2&viewport=895%2C702%2C0.59&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1",
        img: Band,
        alt: "band thumbnail",
        bg: "bg-black px-12",
        isFigma: true,
        paragraphs: [
            "paragraph 1",
            "paragraph 1",
            "paragraph 1",
        ]
    },
    {
        title: "Hoopla",
        to: "https://www.figma.com/proto/lkbPnwl2TOMaTFeqXHvPTg/Inspo-Board?page-id=213%3A195&node-id=213-298&viewport=3469%2C-590%2C1.1&scaling=scale-down&starting-point-node-id=213%3A298",
        img: Hoopla,
        alt: "hoopla thumbnail",
        bg: "bg-white",
        isFigma: true,
    },
    {
        title: "Knit Gauge",
        to: "https://stitchineer.github.io/knit-gauge-calculator/",
        img: Gauge,
        alt: "knitting gauge calculator thumbnail",
        bg: "bg-white",
        isFigma: false,
        smallerFont: true
    },
    {
        title: "",
        to: "",
        img: Gauge,
        alt: "thumbnail",
        bg: "bg-white",
        isFigma: false,
    },



];

export default Projects;