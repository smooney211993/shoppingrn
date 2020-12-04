class Products {
  id: string;
  ownerId: string;
  imageUrl: string;
  description: string;
  price: number;
  title: string;
  constructor(
    id: string,
    ownerId: string,
    title: string,
    imageUrl: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this.title = title;
  }
}

export default Products;
