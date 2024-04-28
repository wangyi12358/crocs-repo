import Link from 'next/link';

export default function Component() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 py-8'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'>
        <Link className='block' href='#'>
          <img
            alt='Product 1'
            className='w-full h-60 object-cover'
            height='300'
            src='/placeholder.svg'
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
        </Link>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2'>
            <Link href='#'>Stylish Sunglasses</Link>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>UV protection, durable frame</p>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-bold text-gray-900 dark:text-gray-50'>$29.99</span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'>
        <Link className='block' href='#'>
          <img
            alt='Product 2'
            className='w-full h-60 object-cover'
            height='300'
            src='/placeholder.svg'
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
        </Link>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2'>
            <Link href='#'>Leather Crossbody Bag</Link>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>Stylish and practical, adjustable strap</p>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-bold text-gray-900 dark:text-gray-50'>$49.99</span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'>
        <Link className='block' href='#'>
          <img
            alt='Product 3'
            className='w-full h-60 object-cover'
            height='300'
            src='/placeholder.svg'
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
        </Link>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2'>
            <Link href='#'>Wireless Headphones</Link>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>High-quality sound, long battery life</p>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-bold text-gray-900 dark:text-gray-50'>$79.99</span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'>
        <Link className='block' href='#'>
          <img
            alt='Product 4'
            className='w-full h-60 object-cover'
            height='300'
            src='/placeholder.svg'
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
        </Link>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2'>
            <Link href='#'>Classic Wristwatch</Link>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>Timeless design, stainless steel case</p>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-bold text-gray-900 dark:text-gray-50'>$59.99</span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'>
        <Link className='block' href='#'>
          <img
            alt='Product 5'
            className='w-full h-60 object-cover'
            height='300'
            src='/placeholder.svg'
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
        </Link>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2'>
            <Link href='#'>Portable Bluetooth Speaker</Link>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>Powerful sound, long battery life</p>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-bold text-gray-900 dark:text-gray-50'>$99.99</span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'>
        <Link className='block' href='#'>
          <img
            alt='Product 6'
            className='w-full h-60 object-cover'
            height='300'
            src='/placeholder.svg'
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
        </Link>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2'>
            <Link href='#'>Ergonomic Office Chair</Link>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>Comfortable and adjustable, supports good posture</p>
          <div className='flex items-center justify-between'>
            <span className='text-xl font-bold text-gray-900 dark:text-gray-50'>$199.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
