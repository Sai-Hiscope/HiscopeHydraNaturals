
import React, { useState } from 'react';
import { CreditCard, Smartphone, Package, CheckCircle, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

const PaymentModal = ({ isOpen, onClose, total }: PaymentModalProps) => {
  const [selectedPayment, setSelectedPayment] = useState<'cod' | 'upi' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const { clearCart } = useCart();

  const handlePayment = async (method: 'cod' | 'upi') => {
    setSelectedPayment(method);
    
    if (method === 'upi') {
      setShowQR(true);
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing for COD
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
    
    // Auto close after success
    setTimeout(() => {
      handleClose();
    }, 4000);
  };

  const handleUPIPayment = async () => {
    setIsProcessing(true);
    setShowQR(false);
    
    // Simulate UPI payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
    
    // Auto close after success
    setTimeout(() => {
      handleClose();
    }, 8000);
  };

  const handleClose = () => {
    setSelectedPayment(null);
    setIsProcessing(false);
    setOrderComplete(false);
    setShowQR(false);
    onClose();
  };

  const handleWhatsApp = () => {
    const message = "Hi! I have completed my payment for Hydra Naturals order. Please find the payment screenshot attached.";
    const whatsappUrl = `https://wa.me/918142740304?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  if (orderComplete) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for your order. We'll deliver your products soon!
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Order ID: #HN{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            
            {selectedPayment === 'upi' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-green-800 mb-2">Payment Confirmation Required</h3>
                <p className="text-sm text-green-700 mb-3">
                  Please send your payment screenshot to our WhatsApp for order confirmation.
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Send Screenshot via WhatsApp
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (showQR) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">UPI Payment</DialogTitle>
          </DialogHeader>
          
          <div className="text-center py-4">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-600">Total Amount</p>
              <p className="text-3xl font-bold text-blue-600">₹{total}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 mb-4 mx-auto w-64 h-64 flex items-center justify-center">
          
          <div className="text-center">
    <img
      src="/lovable-uploads/upi-qr.png"
      alt="UPI QR Code"
      className="h-24 w-24 object-contain mx-auto mb-4"
    />
    <p className="text-sm text-gray-600 font-medium">UPI QR Code</p>
    <p className="text-xs text-gray-500">Scan with any UPI app</p>
  </div>
</div>
            
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm font-medium text-gray-800">swapnasoppari-1@okhdfc</p>
              <p className="text-blue-600 font-mono">swapnasoppari-1@okhdfc</p>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={handleUPIPayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                I've Completed Payment
              </Button>
              <Button 
                onClick={() => setShowQR(false)}
                variant="outline"
                className="w-full"
              >
                Back to Payment Options
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Choose Payment Method</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center mb-6">
            <p className="text-lg text-gray-600">Total Amount</p>
            <p className="text-3xl font-bold text-blue-600">₹{total}</p>
          </div>
          
          {isProcessing ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Processing your order...</p>
            </div>
          ) : (
            <div className="space-y-3">
              <Card 
                className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-blue-300"
                onClick={() => handlePayment('cod')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Package className="h-8 w-8 text-orange-500" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Cash on Delivery</h3>
                      <p className="text-sm text-gray-600">Pay when your order arrives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-blue-300"
                onClick={() => handlePayment('upi')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-8 w-8 text-blue-500" />
                    <div>
                      <h3 className="font-semibold text-gray-900">UPI Payment</h3>
                      <p className="text-sm text-gray-600">Scan QR code to pay instantly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
