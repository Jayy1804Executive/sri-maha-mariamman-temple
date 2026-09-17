import { MessageSquare, Calendar, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBookingModal: () => void;
}

export function FloatingActions({ onOpenBookingModal }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/60123456789?text=Vanakkam%20Gurukkal%2C%20I%20have%20an%20inquiry%20regarding%20Sri%20Maha%20Mariamman%20%26%20Sri%20Perumal%20Temple%20Puchong%20Perdana."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-2.5 rounded-full sm:rounded-2xl shadow-xl hover:shadow-2xl transition flex items-center gap-2 border-2 border-white group cursor-pointer"
        title="Chat with Temple Priest / Admin"
      >
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-bold text-xs">WhatsApp Priest</span>
      </a>
    </div>
  );
}
