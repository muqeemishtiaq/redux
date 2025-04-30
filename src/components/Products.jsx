import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action/Index'


const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Minimalist Desk Organizer',
    href: '#',
    price: '$45',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'A neatly organized desk with compartments holding stationery and papers.',
  },
  {
    id: 6,
    name: 'Ergonomic Office Chair',
    href: '#',
    price: '$199',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt: 'Comfortable office chair with adjustable armrests and lumbar support.',
  },
  {
    id: 7,
    name: 'Wireless Noise-Canceling Headphones',
    href: '#',
    price: '$129',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt: 'Over-ear headphones on a wooden table, ideal for focused work.',
  },
  {
    id: 8,
    name: 'Modern LED Desk Lamp',
    href: '#',
    price: '$59',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Sleek LED lamp illuminating a workspace at night.',
  },
  {
    id: 9,
    name: 'Weekly Planner Notebook',
    href: '#',
    price: '$22',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Open planner notebook with handwritten weekly tasks.',
  },
  {
    id: 10,
    name: 'Portable Standing Desk',
    href: '#',
    price: '$149',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt: 'A lightweight standing desk setup with a laptop and notebook.',
  },
  {
    id: 11,
    name: 'Productivity Timer',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt: 'A digital timer on a desk used for time management techniques.',
  },
  {
    id: 12,
    name: 'Desk Foot Rest',
    href: '#',
    price: '$25',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-09.jpg',
    imageAlt: 'Comfortable foot rest under a desk for ergonomic support.',
  },
]

export default function Example() {
  const dispatch = useDispatch()

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group border p-4 rounded-lg shadow hover:shadow-md">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href} className="hover:underline">
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button
                onClick={() => addProduct(product)}
                className="mt-2 text-sm font-medium bg-gray-600 px-3 py-1 rounded-3xl hover:bg-gray-700 cursor-pointer text-white"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
