import ProfileImage from './assets/Profile.png';

const Avatar = () => (
    <div className="mb-6">
      <div className="w-20 h-20 rounded-full bg-zinc-700 mx-auto overflow-hidden">
       <img src={ProfileImage} alt="Kai Constantine" className="w-full h-full object-cover" />
      </div>
      <p className="text-center mt-2 text-sm text-zinc-300">Kai Constantine</p>
    </div>
  )
  
  export default Avatar
  