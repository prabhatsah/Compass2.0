// import mountainsVideo from "@/assets/Meta Assets/mountains-video-002.mp4";
// import jungleVideo from "@/assets/Meta Assets/jungleVideo.mp4";
// import jungleVideo4K from "@/assets/Meta Assets/jungleVideo4K.mp4";
import jungleMountain4K from "@/assets/Meta Assets/LP-Gallery/jungleMountain4K.mp4";

export default function BgVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={jungleMountain4K} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
