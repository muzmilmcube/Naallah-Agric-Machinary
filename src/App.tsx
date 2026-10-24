import { useState } from 'react';
import { 
  getStoredBusinessInfo, 
  saveBusinessInfoConfig 
} from './data/businessInfo';
import { INITIAL_MACHINERY_DATA } from './data/machineryData';
import { GALLERY_ITEMS } from './data/galleryData';
import { BUSINESS_ACTIVITIES } from './data/farmingDivisions';
import type { BusinessInfo, MachineryItem, GalleryItem, ActivityDivision } from './types';

// Component Imports
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BusinessActivities } from './components/BusinessActivities';
import { MachineryShowcase } from './components/MachineryShowcase';
import { PoultrySection } from './components/PoultrySection';
import { FishFarmingSection } from './components/FishFarmingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickActionBar } from './components/QuickActionBar';
import { EquipmentBackground } from './components/EquipmentBackground';

// Modal Imports
import { EnquiryModal } from './components/Modals/EnquiryModal';
import { LightboxModal } from './components/Modals/LightboxModal';
import { ActivityDetailModal } from './components/Modals/ActivityDetailModal';
import { OwnerConfigModal } from './components/Modals/OwnerConfigModal';
import { MachineryDetailModal } from './components/Modals/MachineryDetailModal';

export function App() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(getStoredBusinessInfo);
  const [machineryList] = useState<MachineryItem[]>(INITIAL_MACHINERY_DATA);
  const [galleryList] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activityList] = useState<ActivityDivision[]>(BUSINESS_ACTIVITIES);

  // Modal States
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedMachineryForEnquiry, setSelectedMachineryForEnquiry] = useState<MachineryItem | null>(null);
  const [defaultServiceForEnquiry, setDefaultServiceForEnquiry] = useState<string | undefined>(undefined);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [ownerConfigOpen, setOwnerConfigOpen] = useState(false);
  const [selectedActivityForModal, setSelectedActivityForModal] = useState<ActivityDivision | null>(null);
  const [selectedMachineryForSpecs, setSelectedMachineryForSpecs] = useState<MachineryItem | null>(null);

  const handleSaveOwnerConfig = (updated: Partial<BusinessInfo>) => {
    const updatedInfo = saveBusinessInfoConfig(updated);
    setBusinessInfo(updatedInfo);
  };

  const handleOpenEnquiryModal = (prefilledService?: string) => {
    setSelectedMachineryForEnquiry(null);
    setDefaultServiceForEnquiry(prefilledService);
    setEnquiryModalOpen(true);
  };

  const handleEnquireMachinery = (item: MachineryItem) => {
    setSelectedMachineryForEnquiry(item);
    setDefaultServiceForEnquiry(undefined);
    setEnquiryModalOpen(true);
  };

  const handleOpenLightbox = (_item: GalleryItem, index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-slate-800 pb-16 md:pb-0 relative overflow-x-hidden">
      {/* Background Agricultural Machinery & Equipment Watermarks */}
      <EquipmentBackground />
      
      {/* Header with Sticky Navigation and Top CAC Banner */}
      <Header
        businessInfo={businessInfo}
        onOpenOwnerConfig={() => setOwnerConfigOpen(true)}
        onOpenEnquiryModal={handleOpenEnquiryModal}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          businessInfo={businessInfo}
          onExploreServices={() => handleNavigateToSection('#activities')}
          onContactBusiness={() => handleNavigateToSection('#contact')}
        />

        {/* About Section */}
        <About
          businessInfo={businessInfo}
          onExploreMachinery={() => handleNavigateToSection('#machinery')}
        />

        {/* Core Registered Activities Section */}
        <BusinessActivities
          activities={activityList}
          onSelectActivity={(act) => setSelectedActivityForModal(act)}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Dedicated Machinery Showcase */}
        <MachineryShowcase
          machineryList={machineryList}
          onEnquireItem={handleEnquireMachinery}
          onViewSpecs={(item) => setSelectedMachineryForSpecs(item)}
        />

        {/* Dedicated Poultry Farming Section */}
        <PoultrySection
          onEnquirePoultry={() => handleOpenEnquiryModal('Poultry Farming & Produce Supply')}
        />

        {/* Dedicated Fish Farming Section */}
        <FishFarmingSection
          onEnquireFish={() => handleOpenEnquiryModal('Fish Farming & Catfish Supply')}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs businessInfo={businessInfo} />

        {/* Visual Portfolio Gallery */}
        <Gallery
          galleryItems={galleryList}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Contact Section with Interactive Form & Map */}
        <Contact
          businessInfo={businessInfo}
          onOpenOwnerConfig={() => setOwnerConfigOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        businessInfo={businessInfo}
        onOpenOwnerConfig={() => setOwnerConfigOpen(true)}
      />

      {/* Mobile Floating Quick Action Bar */}
      <QuickActionBar
        businessInfo={businessInfo}
        onRequestQuote={() => handleOpenEnquiryModal()}
      />

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        businessInfo={businessInfo}
        selectedMachinery={selectedMachineryForEnquiry}
        defaultService={defaultServiceForEnquiry}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryList}
        currentIndex={lightboxIndex}
        onSelectIndex={(newIndex) => setLightboxIndex(newIndex)}
      />

      <ActivityDetailModal
        isOpen={!!selectedActivityForModal}
        onClose={() => setSelectedActivityForModal(null)}
        activity={selectedActivityForModal}
        onInquire={(title) => handleOpenEnquiryModal(title)}
      />

      <MachineryDetailModal
        isOpen={!!selectedMachineryForSpecs}
        onClose={() => setSelectedMachineryForSpecs(null)}
        item={selectedMachineryForSpecs}
        onEnquire={handleEnquireMachinery}
      />

      <OwnerConfigModal
        isOpen={ownerConfigOpen}
        onClose={() => setOwnerConfigOpen(false)}
        businessInfo={businessInfo}
        onSave={handleSaveOwnerConfig}
      />

    </div>
  );
}

export default App;
