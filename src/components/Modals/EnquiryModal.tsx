import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';
import type { BusinessInfo, MachineryItem } from '../../types';
import { formatWhatsAppNumber } from '../../data/businessInfo';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessInfo: BusinessInfo;
  selectedMachinery?: MachineryItem | null;
  defaultService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  businessInfo,
  selectedMachinery,
  defaultService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedMachinery) {
      setInterest(`Machinery: ${selectedMachinery.name} (${selectedMachinery.categoryLabel})`);
      setMessage(`Hello, I am interested in inquiring about specifications, availability, and pricing for the ${selectedMachinery.name}.`);
    } else if (defaultService) {
      setInterest(defaultService);
      setMessage(`Hello, I am inquiring about your ${defaultService} operations.`);
    } else {
      setInterest('General Agricultural Inquiry');
      setMessage('');
    }
    setSubmitted(false);
    setErrors({});
  }, [selectedMachinery, defaultService, isOpen]);

  if (!isOpen) return null;

  const cleanWhatsAppNumber = formatWhatsAppNumber(businessInfo.whatsappNumber);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name.';
    if (!phone.trim()) errs.phone = 'Please provide your phone number.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) errs.message = 'Please provide enquiry details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Equipment / Service Inquiry*\n*Name:* ${name || 'Prospective Client'}\n*Phone:* ${phone}\n*Email:* ${email}\n*Interest:* ${interest}\n*Message:* ${message}`;
    window.open(`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0a2919] text-white flex items-center justify-between border-b border-emerald-900">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              NAALLAH GENERATORS &amp; AGRIC MACHINERIES
            </span>
            <h3 className="text-xl font-bold font-display mt-0.5">
              Request a Quote / Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                Enquiry Successfully Logged!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. Our machinery and farm solutions team will review your request regarding <strong>{interest}</strong>.
              </p>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-amber-300" />
                  <span>Send Direct Copy via WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {selectedMachinery && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center space-x-3">
                  <img
                    src={selectedMachinery.imageUrl}
                    alt={selectedMachinery.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Selected Machinery:
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 leading-tight">
                      {selectedMachinery.name}
                    </h5>
                    <span className="text-[10px] text-slate-500">Price on Enquiry • Gombe, Nigeria</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Musa Abdullahi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                    errors.name ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 0802 345 6789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                      errors.phone ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                      errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Item / Service of Interest
                </label>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Enquiry Message / Specific Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                    errors.message ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
                  }`}
                  placeholder="Specify quantity, power rating, farm size, delivery destination, etc."
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 mt-0.5">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Submit Quote Request</span>
                  <Send className="w-4 h-4 text-amber-300" />
                </button>

                {cleanWhatsAppNumber && cleanWhatsAppNumber.length > 5 && (
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-300 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Or Chat on WhatsApp with Pre-filled Info</span>
                  </button>
                )}
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
