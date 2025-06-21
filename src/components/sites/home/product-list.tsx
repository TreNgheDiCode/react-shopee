import useQueryConfig from '../../../hooks/useQueryConfig';
import { mockCategories } from '../../../lib/mocks/mock-categories';
import { mockProducts } from '../../../lib/mocks/mock-products';
import AsideFilter from './aside-filters';
import ImageCarousel from './image-carousel';
import Product from './product';
import img3 from 'src/assets/slider/img3.jpg';
import img4 from 'src/assets/slider/img4.png';

const ProductList = () => {
  const queryParams = useQueryConfig();
  const productsData = mockProducts;
  const categoriesData = mockCategories;

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {/* Carousel */}
        <div className='flex flex-row mb-8'>
          <div className='flex flex-col  items-center grow basis-2/3 w-screen '>
            <ImageCarousel />
          </div>
          <div className='flex flex-col  items-center grow-0 basis-1/3  w-screen gap-0.5 pl-1'>
            <img src={img3} alt='slider 3' className='rounded' />
            <img src={img4} alt='slider 4' className='rounded' />
          </div>
        </div>

        {/* ProductList */}
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter queryConfig={queryParams} categories={categoriesData || []} />
            </div>
            <div className='col-span-9'>
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {productsData.map((item) => (
                  <div key={item._id} className='col-span-1'>
                    <Product product={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
