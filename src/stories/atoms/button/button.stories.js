import primary from "../../../../dist/stories/atoms/button/primary.stories/index.html";
import outline from "../../../../dist/stories/atoms/button/outline.stories/index.html";
import ghost from "../../../../dist/stories/atoms/button/ghost.stories/index.html";
import text from "../../../../dist/stories/atoms/button/text.stories/index.html";
import iconOnly from "../../../../dist/stories/atoms/button/icon-only.stories/index.html";

export default {
  title: "Atoms/Button",
};

export const Primary = () => primary;
export const Outline = () => outline;
export const Ghost = () => ghost;
export const Text = () => text;
export const IconOnly = () => iconOnly;
