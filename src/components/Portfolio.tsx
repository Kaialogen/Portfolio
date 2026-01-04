import { Link } from 'react-router';

export default function Portfolio() {
  return (
    <section>
      <h2 className='text-2xl'>Portfolio</h2>
      <br />
      <ul>
        <li>
          <a
            className='hover:underline hover:text-slate-300 cursor-pointer text-sm'
            href='https://github.com/Kaialogen/Expense_Tracking_App'
          >
            Expense Tracking App
          </a>
        </li>
        <li>
          <a
            className='hover:underline hover:text-slate-300 cursor-pointer text-sm'
            href='https://github.com/Kaialogen/Movie-Pad'
          >
            Movie Rental Full Stack App
          </a>
        </li>
      </ul>
      <div className='my-4 text-center'>
        <Link to={'/'} className='text-sm hover:underline hover:text-slate-300'>
          More Projects
        </Link>
      </div>
      <br />
    </section>
  );
}
