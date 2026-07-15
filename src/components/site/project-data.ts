import projLibrary from "@/assets/proj-library.jpg";
import projKitchen from "@/assets/proj-kitchen.jpg";
import projWardrobe from "@/assets/proj-wardrobe.jpg";
import projShelving from "@/assets/proj-shelving.jpg";
import projMedia from "@/assets/proj-media.jpg";
import projectDarkLibrary from "@/assets/project-dark-library.jpg";
import projectMirroredDressingRoom from "@/assets/project-mirrored-dressing-room.jpg";
import projectLightKitchen from "@/assets/project-light-kitchen.jpg";
import projectStGeorgesHillLibrary from "@/assets/project-st-georges-hill-library.jpg";
import projectBar from "@/assets/project-bar.jpg";
import projectMediaWall from "@/assets/project-media-wall.jpg";
import project3607 from "@/assets/project-3607.jpg";

export type ProjectItem = {
  src: string;
  title: string;
  meta: string;
  location?: string;
  size: "tall" | "wide";
};

export const projectItems: ProjectItem[] = [
  {
    src: projectStGeorgesHillLibrary,
    title: "Library",
    meta: "Residential · Library",
    location: "St Georges Hill, London",
    size: "wide",
  },
  {
    src: projKitchen,
    title: "Dressing Room",
    meta: "Residential · Dressing Room",
    location: "London",
    size: "wide",
  },
  {
    src: projWardrobe,
    title: "Dressing Room",
    meta: "Residential · Dressing Room",
    location: "Fulham",
    size: "tall",
  },
  {
    src: projLibrary,
    title: "Walnut Library & Study",
    meta: "Residential · Library",
    location: "London",
    size: "tall",
  },
  {
    src: projShelving,
    title: "Illuminated Oak Shelving",
    meta: "Residential · Living",
    location: "London",
    size: "wide",
  },
  {
    src: projMedia,
    title: "Marquetry Media Unit",
    meta: "Residential · Media Room",
    location: "London",
    size: "tall",
  },
  {
    src: projectMirroredDressingRoom,
    title: "Mirrored Dressing Room",
    meta: "Residential · Dressing Room",
    location: "London",
    size: "tall",
  },
  {
    src: projectLightKitchen,
    title: "Bleached Oak Kitchen",
    meta: "Residential · Kitchen",
    location: "London",
    size: "wide",
  },
  {
    src: projectDarkLibrary,
    title: "Dark Oak Library",
    meta: "Residential · Library",
    location: "London",
    size: "tall",
  },
  {
    src: projectBar,
    title: "Bespoke Bar",
    meta: "Residential · Bar",
    location: "London",
    size: "wide",
  },
  {
    src: projectMediaWall,
    title: "Media Wall",
    meta: "Residential · Media Room",
    location: "London",
    size: "wide",
  },
  {
    src: project3607,
    title: "Bespoke Joinery Detail",
    meta: "Residential · Joinery",
    location: "London",
    size: "tall",
  },
];

export const instagramPreviewItems = projectItems.slice(0, 5);
