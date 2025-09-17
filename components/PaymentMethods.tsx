'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Smartphone, Building, Wallet, Banknote, QrCode } from 'lucide-react';
import { paymentMethods, upiProviders, walletProviders, banks } from '@/lib/payment';
import { PaymentData } from '@/types/payment';

interface PaymentMethodsProps {
  onPaymentDataChange: (data: PaymentData) => void;
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export function PaymentMethods({ onPaymentDataChange, selectedMethod, onMethodChange }: PaymentMethodsProps) {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    method: selectedMethod
  });

  const updatePaymentData = (updates: Partial<PaymentData>) => {
    const newData = { ...paymentData, ...updates };
    setPaymentData(newData);
    onPaymentDataChange(newData);
  };

  const getMethodIcon = (type: string) => {
    switch (type) {
      case 'card': return <CreditCard className="h-5 w-5" />;
      case 'upi': return <Smartphone className="h-5 w-5" />;
      case 'netbanking': return <Building className="h-5 w-5" />;
      case 'wallet': return <Wallet className="h-5 w-5" />;
      case 'cod': return <Banknote className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={selectedMethod} onValueChange={onMethodChange}>
          {paymentMethods.filter(method => method.enabled).map((method) => (
            <div key={method.id} className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={method.id} id={method.id} />
                <Label htmlFor={method.id} className="flex items-center gap-2 cursor-pointer">
                  {getMethodIcon(method.type)}
                  <span className="font-medium">{method.name}</span>
                  <span className="text-lg">{method.icon}</span>
                </Label>
              </div>

              {selectedMethod === method.id && (
                <div className="ml-6 p-4 bg-gray-50 rounded-lg space-y-4">
                  {method.type === 'card' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={paymentData.cardNumber || ''}
                          onChange={(e) => updatePaymentData({ cardNumber: e.target.value })}
                          maxLength={19}
                        />
                      </div>
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={paymentData.expiryDate || ''}
                          onChange={(e) => updatePaymentData({ expiryDate: e.target.value })}
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={paymentData.cvv || ''}
                          onChange={(e) => updatePaymentData({ cvv: e.target.value })}
                          maxLength={4}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input
                          id="nameOnCard"
                          placeholder="John Doe"
                          value={paymentData.nameOnCard || ''}
                          onChange={(e) => updatePaymentData({ nameOnCard: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {method.type === 'upi' && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input
                          id="upiId"
                          placeholder="yourname@upi"
                          value={paymentData.upiId || ''}
                          onChange={(e) => updatePaymentData({ upiId: e.target.value })}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <Label className="text-sm font-medium mb-3 block">Or pay with UPI App</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {upiProviders.map((provider) => (
                            <Button
                              key={provider.id}
                              variant="outline"
                              className="h-auto p-3 flex flex-col items-center gap-2 hover:bg-gray-50"
                              onClick={() => updatePaymentData({ upiProvider: provider.id })}
                            >
                              <span className="text-2xl">{provider.icon}</span>
                              <span className="text-xs font-medium">{provider.name}</span>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <QrCode className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">QR Code Payment</span>
                        </div>
                        <p className="text-xs text-blue-600">
                          Scan QR code with any UPI app to make payment instantly
                        </p>
                      </div>
                    </div>
                  )}

                  {method.type === 'netbanking' && (
                    <div>
                      <Label htmlFor="bank">Select Your Bank</Label>
                      <Select onValueChange={(value) => updatePaymentData({ bankCode: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          {banks.map((bank) => (
                            <SelectItem key={bank.code} value={bank.code}>
                              {bank.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {method.type === 'wallet' && (
                    <div>
                      <Label htmlFor="wallet">Select Wallet</Label>
                      <Select onValueChange={(value) => updatePaymentData({ walletProvider: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your wallet" />
                        </SelectTrigger>
                        <SelectContent>
                          {walletProviders.map((wallet) => (
                            <SelectItem key={wallet.id} value={wallet.id}>
                              {wallet.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {method.type === 'cod' && (
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Banknote className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-amber-800">Cash on Delivery</span>
                      </div>
                      <p className="text-sm text-amber-700">
                        Pay with cash when your order is delivered. Additional charges may apply.
                      </p>
                      <p className="text-xs text-amber-600 mt-2">
                        COD available for orders up to ₹50,000
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}