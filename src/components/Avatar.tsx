export default function Avatar() {
  return (
    <div className='w-72 h-full rounded-2xl overflow-hidden border-4 border-gray-700 shadow-lg'>
      <img
        src='/images/Profile.jpeg'
        alt='Kai Constantine'
        className='w-full h-full object-cover'
        fetchPriority='high'
      />
    </div>
  );
}
