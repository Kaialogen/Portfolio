import Image from "next/image";
import image from "../assets/Profile.jpeg";

export default function Avatar() {
  return (
    <div className="w-72 h-full rounded-2xl overflow-hidden border-4 border-Ash shadow-lg">
      <Image
        src={image}
        alt="Kai Constantine"
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
