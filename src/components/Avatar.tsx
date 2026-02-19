import Image from 'next/image';

export default function Avatar() {
  return (
    <div className='w-72 xl:w-80 h-full rounded-2xl overflow-hidden border-4 border-Ash shadow-lg'>
      <Image
        src='/profile.jpeg'
        alt='Kai Constantine'
        className='w-full h-full object-cover'
        width={288}
        height={336}
        priority
      />
    </div>
  );
}
