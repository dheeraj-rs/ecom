import { PaymentMethod, UPIProvider, PaymentData } from '@/types/payment';

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    type: 'card',
    icon: '💳',
    enabled: true
  },
  {
    id: 'upi',
    name: 'UPI',
    type: 'upi',
    icon: '📱',
    enabled: true
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    type: 'netbanking',
    icon: '🏦',
    enabled: true
  },
  {
    id: 'wallet',
    name: 'Digital Wallet',
    type: 'wallet',
    icon: '👛',
    enabled: true
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    type: 'cod',
    icon: '💵',
    enabled: true
  }
];

export const upiProviders: UPIProvider[] = [
  {
    id: 'gpay',
    name: 'Google Pay',
    icon: '🟢',
    deepLink: 'gpay://pay'
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    icon: '🟣',
    deepLink: 'phonepe://pay'
  },
  {
    id: 'paytm',
    name: 'Paytm',
    icon: '🔵',
    deepLink: 'paytmmp://pay'
  },
  {
    id: 'bhim',
    name: 'BHIM UPI',
    icon: '🟠',
    deepLink: 'bhim://pay'
  },
  {
    id: 'amazonpay',
    name: 'Amazon Pay',
    icon: '🟡',
    deepLink: 'amazonpay://pay'
  }
];

export const walletProviders = [
  { id: 'paytm', name: 'Paytm Wallet' },
  { id: 'mobikwik', name: 'MobiKwik' },
  { id: 'freecharge', name: 'FreeCharge' },
  { id: 'amazonpay', name: 'Amazon Pay' },
  { id: 'jiomoney', name: 'JioMoney' }
];

export const banks = [
  { code: 'SBI', name: 'State Bank of India' },
  { code: 'HDFC', name: 'HDFC Bank' },
  { code: 'ICICI', name: 'ICICI Bank' },
  { code: 'AXIS', name: 'Axis Bank' },
  { code: 'KOTAK', name: 'Kotak Mahindra Bank' },
  { code: 'PNB', name: 'Punjab National Bank' },
  { code: 'BOB', name: 'Bank of Baroda' },
  { code: 'CANARA', name: 'Canara Bank' }
];

export class PaymentGateway {
  static async processPayment(paymentData: PaymentData, amount: number): Promise<{ success: boolean; transactionId?: string; error?: string }> {
    // Simulate payment processing
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate success/failure (90% success rate)
        const success = Math.random() > 0.1;
        
        if (success) {
          resolve({
            success: true,
            transactionId: `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`
          });
        } else {
          resolve({
            success: false,
            error: 'Payment failed. Please try again.'
          });
        }
      }, 2000);
    });
  }

  static generateUPILink(upiId: string, amount: number, orderId: string): string {
    const merchantUPI = 'royalwood@paytm'; // Your merchant UPI ID
    const params = new URLSearchParams({
      pa: merchantUPI,
      pn: 'Royalwood Industry',
      tr: orderId,
      am: amount.toString(),
      cu: 'INR',
      tn: `Payment for Order ${orderId}`
    });
    
    return `upi://pay?${params.toString()}`;
  }

  static async initiateUPIPayment(provider: string, upiId: string, amount: number, orderId: string): Promise<void> {
    const upiLink = this.generateUPILink(upiId, amount, orderId);
    
    // Try to open the specific UPI app
    const upiProvider = upiProviders.find(p => p.id === provider);
    if (upiProvider) {
      try {
        window.open(upiProvider.deepLink + '?' + upiLink.split('?')[1], '_blank');
      } catch (error) {
        // Fallback to generic UPI link
        window.open(upiLink, '_blank');
      }
    } else {
      window.open(upiLink, '_blank');
    }
  }
}