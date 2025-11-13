enum OrderStatus {
  NEW = 'New',
  PROCESSING = 'Processing',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
}

interface Category {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
}

interface Supplier {
  id: number;
  userId: number;
  companyName: string;
  phone: string;
  contactPerson: string;
}

interface Product {
  id: number;
  categoryId: number;
  supplierId: number;
  name: string;
  description?: string;
  rating: number;
  price: number;
  stockQuantity: number;
}

interface Order {
  id: number;
  userId: number;
  status: OrderStatus;
  createdAt: Date;
  totalAmount: number;
}

interface OrderProduct {
  orderId: number;
  productId: number;
  quantity: number;
  soldPrice: number;
}
