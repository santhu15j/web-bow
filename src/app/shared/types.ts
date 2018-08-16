export interface ApiResponse {
  response: any;
  status: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface SubCategory {
  id: string;
  title: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  minQuantity: number;
  maxQuantity: number;
  serviceKey: string;
  servicePrice: number;
  description: string;
}

export interface AddOrder {
  serviceId: string;
  quantity: string;
  link: string;
}