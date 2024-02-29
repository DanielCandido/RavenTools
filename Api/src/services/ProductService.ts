import ProductRepository from "@src/repository/ProductRepository";
import database from "@src/config/database";

export default class ProductService {
  private readonly productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepository(database);
  }

  public get = async () => {
    return this.productRepository.getAll();
  };
}
