export interface PaymentMethod {
  id: string;
  name: string;
  type: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod';
  icon: string;
  enabled: boolean;
}

export interface UPIProvider {
  id: string;
  name: string;
  icon: string;
  deepLink: string;
}

export interface PaymentData {
  method: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
  upiId?: string;
  upiProvider?: string;
  bankCode?: string;
  walletProvider?: string;
}

export interface OrderData {
  id: string;
  items: any[];
  total: number;
  shipping: number;
  tax: number;
  finalTotal: number;
  customerInfo: any;
  shippingAddress: any;
  paymentData: PaymentData;
  status: 'pending' | 'processing' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
}