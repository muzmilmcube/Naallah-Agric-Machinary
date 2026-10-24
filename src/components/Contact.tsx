import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Settings, 
  ExternalLink 
} from 'lucide-react';
import type { BusinessInfo, EnquiryFormState } from '../types';
import { formatWhatsAppNumber } from '../data/businessInfo';

interface ContactProps {
  businessInfo: BusinessInfo;
  onOpenOwnerConfig: () => void;
}

export const Contact: React.FC<ContactProps> = ({ businessInfo, onOpenOwnerConfig }) => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    name: '',
    email: '',
    phone: '',
    subject: 'Agricultural Machinery Enquiry',
    serviceInterest: 'Agricultural Machinery',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof EnquiryFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cleanWhatsAppNumber = formatWhatsAppNumber(businessInfo.whatsappNumber);

  const validate = () => {
    const errors: Partial<Record<keyof EnquiryFormState, string>> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide your telephone number.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please write your enquiry message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Website Enquiry*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Interest:* ${formData.serviceInterest}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Agricultural Machinery Enquiry',
      serviceInterest: 'Agricultural Machinery',
      message: ''
    });
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
            Contact Our Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out for agricultural machinery sales, poultry produce, catfish orders, or tailored farm consultations in Gombe State.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* 2 Column Layout: Details & Location vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Contact Card */}
            <div className="p-7 rounded-3xl bg-[#fcfbf7] border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Registered Business Enterprise</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#0a2919] font-display">
                  {businessInfo.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  Registration Number: {businessInfo.regNumber}
                </p>
              </div>

              {/* Contact Info List */}
              <div className="space-y-4 text-sm divide-y divide-slate-100">
                
                {/* Address */}
                <div className="pt-3 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Physical Address
                    </span>
                    <p className="font-semibold text-slate-800 leading-snug mt-0.5">
                      {businessInfo.address}
                    </p>
                    <span className="text-xs text-slate-500">Gombe State, Nigeria</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="pt-3 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${businessInfo.phone}`}
                      className="font-semibold text-slate-800 hover:text-emerald-700 transition-colors block mt-0.5"
                    >
                      {businessInfo.phone}
                    </a>
                    <span className="text-[11px] text-slate-400">Owner Configurable</span>
                  </div>
                </div>

                {/* Email */}
                <div className="pt-3 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${businessInfo.email}`}
                      className="font-semibold text-slate-800 hover:text-emerald-700 transition-colors block mt-0.5 break-all"
                    >
                      {businessInfo.email}
                    </a>
                    <span className="text-[11px] text-slate-400">Owner Configurable</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="pt-3 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Business Hours
                    </span>
                    <p className="font-semibold text-slate-800 mt-0.5">
                      {businessInfo.workingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA Button */}
              {cleanWhatsAppNumber && cleanWhatsAppNumber.length > 5 && (
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
                      'Hello NAALLAH GENERATORS AND AGRIC MACHINERIES, I am inquiring from your website regarding machinery sales and farming services.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5 text-amber-300" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              )}

              {/* Owner Configuration Quick Action Banner */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-between">
                <div className="text-xs text-amber-900">
                  <span className="font-bold block">Business Owner?</span>
                  <span>Update your live phone, email &amp; WhatsApp</span>
                </div>
                <button
                  onClick={onOpenOwnerConfig}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center space-x-1 shrink-0"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Configure</span>
                </button>
              </div>

            </div>

            {/* Google Maps Location Preview / Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0a2919] uppercase tracking-wider">
                    Our Location on Map
                  </h4>
                  <p className="text-xs text-slate-500">Khairat Plaza, Along Sabonline St., Gombe</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    'No. 7 Khairat Plaza, Along Sabonline Street, Gombe, Gombe State, Nigeria'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive iframe embed of Gombe, Gombe State */}
              <div className="h-56 w-full relative">
                <iframe
                  title="NAALLAH Location Map"
                  src="https://maps.google.com/maps?q=Gombe+State+Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-slate-200 text-xs font-semibold text-slate-800 flex items-center space-x-1.5 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>No. 7 Khairat Plaza, Gombe</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#fcfbf7] border border-slate-200 shadow-sm relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0a2919] font-display">
                  Send an Enquiry or Request
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Fill in your details below and our team will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0a2919] font-display">
                    Thank You for Your Enquiry!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your message regarding <strong>{formData.subject}</strong> has been received by NAALLAH GENERATORS AND AGRIC MACHINERIES.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4 text-amber-300" />
                      <span>Also Send to WhatsApp Now</span>
                    </button>

                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ibrahim Abubakar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white ${
                          formErrors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0803 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white ${
                          formErrors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white ${
                          formErrors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                      >
                        <option value="Agricultural Machinery">Agricultural Machinery Sales</option>
                        <option value="Farm Generators">Farm &amp; Industrial Generators</option>
                        <option value="Water Pumps & Irrigation">Water Pumps &amp; Irrigation Systems</option>
                        <option value="Poultry Farming">Poultry Farming (Eggs &amp; Birds)</option>
                        <option value="Fish Farming">Fish Farming (Catfish &amp; Fingerlings)</option>
                        <option value="General Consultation">General Agribusiness Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiry on 4WD Agricultural Tractor & Implements"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white ${
                        formErrors.subject ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message / Enquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please specify your equipment requirements, farm scale, location, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white ${
                        formErrors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-bold text-base shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Business Enquiry</span>
                        <Send className="w-4 h-4 text-amber-300" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    We respect your privacy. Inquiries are handled directly by NAALLAH management.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
