import http from '../http-common';

class ProductService {
  getAll() {
    return http.get('/products');
  }
}

export default new ProductService();
