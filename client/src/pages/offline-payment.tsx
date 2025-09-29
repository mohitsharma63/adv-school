
import { useState } from "react";
import { CreditCard, Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface OfflinePayment {
  paymentMethod: string;
  referenceNumber: string;
  amount: string;
  paymentDate: string;
  description: string;
  attachment?: File;
}

export default function OfflinePayment() {
  const [payment, setPayment] = useState<OfflinePayment>({
    paymentMethod: "",
    referenceNumber: "",
    amount: "",
    paymentDate: "",
    description: "",
  });

  const handleInputChange = (field: keyof OfflinePayment, value: string) => {
    setPayment(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPayment(prev => ({ ...prev, attachment: file }));
    }
  };

  const handleSubmit = () => {
    console.log("Submitting offline payment:", payment);
  };
 const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="offline-payment-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <CreditCard className="w-6 h-6 mr-2" />
            Offline Payment
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="paymentMethod">Payment Method *</Label>
              <Select value={payment.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                  <SelectItem value="money-order">Money Order</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="amount">Amount *</Label>
              <Input
                id="amount"
                type="number"
                value={payment.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <div>
              <Label htmlFor="referenceNumber">Reference Number</Label>
              <Input
                id="referenceNumber"
                value={payment.referenceNumber}
                onChange={(e) => handleInputChange('referenceNumber', e.target.value)}
                placeholder="Enter reference number"
              />
            </div>

            <div>
              <Label htmlFor="paymentDate">Payment Date *</Label>
              <Input
                id="paymentDate"
                type="date"
                value={payment.paymentDate}
                onChange={(e) => handleInputChange('paymentDate', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={payment.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter payment description"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="attachment">Attachment</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload payment receipt or proof
                </p>
                <input
                  id="attachment"
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx"
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('attachment')?.click()}
                >
                  Choose File
                </Button>
                {payment.attachment && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {payment.attachment.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSubmit}>Submit Payment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
      </SidebarInset>
                        </div>
                    </SidebarProvider>
  );
}
