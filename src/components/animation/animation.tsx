import AnimationWorker from "./animation.worker";

const Animation = typeof window === "object" && AnimationWorker;

export default Animation;
