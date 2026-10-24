import React, { useState, useEffect } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Settings, 
  Phone, 
  Mail, 
  MessageCircle, 
  Share2, 
  CheckCircle2, 
  ShieldAlert 
} from 'lucide-react';
import type { BusinessInfo } from '../../types';
import { INITIAL_BUSINESS_INFO } from '../../data/businessInfo';

interface OwnerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessInfo: BusinessInfo;
  onSave: (updated: Partial<BusinessInfo>) => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({
  isOpen,
  onClose,
  businessInfo,
  onSave,
}) => {
  const [phone, setPhone] = useState(businessInfo.phone);
  const [whatsappNumber, setWhatsappNumber] = useState(businessInfo.whatsappNumber);
  const [email, setEmail] = useState(businessInfo.email);
  const [facebook, setFacebook] = useState(businessInfo.socialLinks.facebook);
  const [twitter, setTwitter] = useState(businessInfo.socialLinks.twitter);
  const [instagram, setInstagram] = useState(businessInfo.socialLinks.instagram);
  const [linkedin, setLinkedin] = useState(businessInfo.socialLinks.linkedin);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setPhone(businessInfo.phone);
    setWhatsappNumber(businessInfo.whatsappNumber);
    setEmail(businessInfo.email);
    setFacebook(businessInfo.socialLinks.facebook);
    setTwitter(businessInfo.socialLinks.twitter);
    setInstagram(businessInfo.socialLinks.instagram);
    setLinkedin(businessInfo.socialLinks.linkedin);
    setSavedSuccess(false);
  }, [businessInfo, isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      phone,
      whatsappNumber,
      email,
      socialLinks: {
        facebook,
        twitter,
        instagram,
        linkedin,
      }
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setPhone(INITIAL_BUSINESS_INFO.phone);
    setWhatsappNumber(INITIAL_BUSINESS_INFO.whatsappNumber);
    setEmail(INITIAL_BUSINESS_INFO.email);
    setFacebook(INITIAL_BUSINESS_INFO.socialLinks.facebook);
    setTwitter(INITIAL_BUSINESS_INFO.socialLinks.twitter);
    setInstagram(INITIAL_BUSINESS_INFO.socialLinks.instagram);
    setLinkedin(INITIAL_BUSINESS_INFO.socialLinks.linkedin);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0a2919] text-white flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display leading-tight">
                Business Owner Settings
              </h3>
              <p className="text-xs text-emerald-200">
                Configure Live Contact &amp; WhatsApp Details
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="p-4 bg-amber-50 border-b border-amber-100 flex items-start space-x-2 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            Changes saved here are stored in your browser storage and immediately update all telephone numbers, emails, and WhatsApp click-to-chat links across the entire website.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {savedSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center space-x-2 text-xs font-bold animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Contact settings updated successfully!</span>
            </div>
          )}

          <form id="owner-config-form" onSubmit={handleSave} className="space-y-4">
            
            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center">
                <Phone className="w-3.5 h-3.5 text-emerald-700 mr-1.5" />
                <span>Primary Phone Number</span>
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08037086302"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700 mr-1.5" />
                <span>WhatsApp Business Number</span>
              </label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="08037086302"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Include country code without '+' or spaces for best WhatsApp redirection (e.g. 2348030000000)
              </span>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center">
                <Mail className="w-3.5 h-3.5 text-emerald-700 mr-1.5" />
                <span>Official Business Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@naallahmachineries.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center">
                <Share2 className="w-3.5 h-3.5 text-emerald-700 mr-1.5" />
                <span>Social Media URLs</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">Facebook URL</span>
                  <input
                    type="url"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    placeholder="https://facebook.com/yourpage"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">Twitter / X URL</span>
                  <input
                    type="url"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder="https://x.com/yourhandle"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">Instagram URL</span>
                  <input
                    type="url"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="https://instagram.com/yourpage"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">LinkedIn URL</span>
                  <input
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/company/yourpage"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/80 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/80 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              form="owner-config-form"
              className="px-5 py-2 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white text-xs font-bold flex items-center space-x-1.5 shadow-md transition-colors"
            >
              <Save className="w-3.5 h-3.5 text-amber-300" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
