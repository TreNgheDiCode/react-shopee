import { Button } from './button';

interface Props {
  name: string;
  classId: number;
}

const products = [
  { id: 1, name: 'Sản phẩm 1', price: 100 },
  { id: 2, name: 'Sản phẩm 2', price: 200 },
  { id: 3, name: 'Sản phẩm 3', price: 300 }
];

export function HomePage({ classId, name }: Props) {
  return (
    <main className="mx-12 my-6">
      <h1>
        {name} {classId}
      </h1>
      Danh sách sản phẩm:
      <ul className="list-disc list-inside ">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} VNĐ
          </li>
        ))}
      </ul>
      <Button />
    </main>
  );
}
