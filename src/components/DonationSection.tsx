import { useState, FormEvent } from 'react';
import { HeartHandshake, QrCode, Copy, Check, Download, ShieldCheck, Sparkles, Send, FileText, ArrowRight } from 'lucide-react';
import { donationFunds, bankDetails, DonationFundItem } from '../data/templeData';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DonationSectionProps {
  currentLang: Language;
}

export function DonationSection({ currentLang }: DonationSectionProps) {
  const t = translations[currentLang];
  const [selectedFund, setSelectedFund] = useState<DonationFundItem>(donationFunds[0]);
  const [customAmount, setCustomAmount] = useState<number>(101);
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedDuitNow, setCopiedDuitNow] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [txnRef, setTxnRef] = useState('');
  const [receiptGenerated, setReceiptGenerated] = useState(false);

  const handleCopy = (text: string, type: 'bank' | 'duitnow') => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    } else {
      setCopiedDuitNow(true);
      setTimeout(() => setCopiedDuitNow(false), 2000);
    }
  };

  const handleReceiptSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReceiptGenerated(true);
  };

  return (
    <section id="donations" className="py-20 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B111A]/10 border border-[#6B111A]/20 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Punya Kainkaryam & Annadhanam</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
            {t.donationsHeading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            {t.donationsSubheading}
          </p>
        </div>

        {/* Donation Funds Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {donationFunds.map((fund) => {
            const isSelected = selectedFund.id === fund.id;
            const progress = Math.min(100, Math.round((fund.currentRaisedMYR / fund.goalMYR) * 100));

            return (
              <div
                key={fund.id}
                onClick={() => setSelectedFund(fund)}
                className={`bg-white rounded-2xl p-5 border transition-all duration-300 cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#6B111A] ring-2 ring-[#D4AF37]/50 -translate-y-1'
                    : 'border-amber-200/60 hover:border-amber-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-[#6B111A] border border-amber-300">
                      {fund.badge}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">
                      {fund.donorCount} Donors
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#1F1F1F] font-cinzel leading-snug">
                    {currentLang === 'ta' ? fund.tamilTitle : fund.title}
                  </h3>

                  <p className="text-xs text-zinc-600 mt-2 line-clamp-3 leading-relaxed">
                    {fund.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-500 font-medium">Raised: RM {fund.currentRaisedMYR.toLocaleString()}</span>
                    <span className="font-bold text-[#6B111A]">{progress}%</span>
                  </div>
                  <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#D4AF37] to-[#6B111A] h-full rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Donation Payment Portal Box (DuitNow QR & Bank Transfer) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: DuitNow QR & Instant Pay */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#4A0B12] to-[#250508] text-white p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/40 text-center flex flex-col items-center justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-amber-400/30 text-amber-200 text-xs font-bold mb-3">
                <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Malaysian DuitNow QR Standard</span>
              </div>
              <h3 className="text-xl font-bold font-cinzel text-amber-100">
                Scan & Donate with Any Bank / eWallet
              </h3>
              <p className="text-xs text-amber-200/80 mt-1">
                Maybank MAE, CIMB OCTO, Touch 'n Go eWallet, GrabPay, Boost, Public Bank, etc.
              </p>
            </div>

            {/* DuitNow QR Frame */}
            <div className="bg-white p-4 rounded-2xl shadow-xl border-4 border-[#D4AF37] relative group">
              <div className="w-52 h-52 bg-white flex flex-col items-center justify-center p-2">
                {/* SVG Mock QR of DuitNow with Temple Emblem */}
                <div className="w-full h-full border-4 border-black p-2 flex flex-col justify-between relative">
                  <div className="flex justify-between">
                    <div className="w-8 h-8 bg-black"></div>
                    <div className="w-8 h-8 bg-black"></div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#6B111A] text-amber-300 font-bold flex items-center justify-center text-xl font-cinzel border-2 border-[#D4AF37]">
                      🕉️
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-8 h-8 bg-black"></div>
                    <div className="w-4 h-4 bg-[#ED1C24]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center text-[11px] font-bold text-zinc-800">
                DuitNow ID: {bankDetails.duitNowId}
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-2">
              <button
                onClick={() => handleCopy(bankDetails.duitNowId, 'duitnow')}
                className="text-xs bg-white/10 hover:bg-white/20 text-amber-200 px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer border border-amber-300/30"
              >
                {copiedDuitNow ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied DuitNow ID!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy DuitNow ID</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Bank Transfer & Preset Amounts */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#6B111A] uppercase tracking-wider">
                Direct Bank Transfer Details
              </span>
              <h3 className="text-2xl font-bold font-cinzel text-zinc-900 mt-1">
                Persatuan Penganut Sri Maha Mariamman & Sri Perumal
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Official Registered Temple Account with Malayan Banking Berhad (Maybank)
              </p>
            </div>

            {/* Bank Card */}
            <div className="bg-[#FBF9F5] p-5 rounded-2xl border border-amber-200 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-2">
                <span className="text-zinc-500">Bank Name:</span>
                <span className="font-bold text-zinc-900">{bankDetails.bankName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-2">
                <span className="text-zinc-500">Account Name:</span>
                <span className="font-bold text-zinc-900 text-right">{bankDetails.accountHolder}</span>
              </div>
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-2">
                <span className="text-zinc-500">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-base text-[#6B111A]">{bankDetails.accountNumber}</span>
                  <button
                    onClick={() => handleCopy(bankDetails.accountNumber, 'bank')}
                    className="p-1 text-zinc-500 hover:text-[#6B111A] bg-white rounded border border-amber-300 cursor-pointer"
                    title="Copy Account Number"
                  >
                    {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">ROS Reg No / Swift:</span>
                <span className="text-zinc-700 font-medium">{bankDetails.registrationNo} | {bankDetails.swiftCode}</span>
              </div>
            </div>

            {/* Suggested Amounts Selection */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                Select or Enter Contribution Amount (MYR)
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedFund.presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setCustomAmount(amt)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer border ${
                      customAmount === amt
                        ? 'bg-[#6B111A] text-amber-100 border-[#D4AF37] shadow-sm'
                        : 'bg-white text-zinc-800 border-amber-200 hover:bg-amber-50'
                    }`}
                  >
                    RM {amt}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">RM</span>
                  <input
                    type="number"
                    min={1}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 bg-[#FBF9F5] border border-amber-200 rounded-xl text-sm font-bold text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                  />
                </div>
                <button
                  onClick={() => setShowReceiptModal(true)}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-1.5 cursor-pointer border border-[#b89528] shrink-0"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request e-Receipt</span>
                </button>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-zinc-600 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official receipts are issued upon receipt confirmation for accounting and tax records.</span>
            </div>

          </div>

        </div>

      </div>

      {/* Official e-Receipt Request Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="bg-[#FBF9F5] rounded-3xl border border-[#D4AF37]/50 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => {
                setShowReceiptModal(false);
                setReceiptGenerated(false);
              }}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 p-1.5 rounded-full hover:bg-zinc-200 transition cursor-pointer"
            >
              ✕
            </button>

            {receiptGenerated ? (
              <div className="text-center space-y-4 animate-in zoom-in-95">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-cinzel text-zinc-900">
                  e-Receipt Acknowledgment Generated
                </h4>
                <div className="bg-white p-4 rounded-xl border border-amber-200 text-left text-xs space-y-2">
                  <p><span className="text-zinc-400">Donor:</span> <strong className="text-zinc-800">{donorName}</strong></p>
                  <p><span className="text-zinc-400">Contribution:</span> <strong className="text-[#6B111A]">RM {customAmount} ({selectedFund.title})</strong></p>
                  <p><span className="text-zinc-400">Txn / Slip Ref:</span> <strong className="text-zinc-800">{txnRef || 'ONLINE-TRANSFER'}</strong></p>
                  <p><span className="text-zinc-400">Date:</span> <strong className="text-zinc-800">{new Date().toLocaleDateString()}</strong></p>
                </div>
                <p className="text-xs text-zinc-500">
                  Please send your bank transfer slip to our WhatsApp treasurer to finalize the formal tax-deductible receipt.
                </p>
                <a
                  href={`https://wa.me/60123456789?text=${encodeURIComponent(
                    `🕉️ *TEMPLE DONATION SLIP*\n*Donor:* ${donorName}\n*Amount:* RM ${customAmount}\n*Fund:* ${selectedFund.title}\n*Txn Ref:* ${txnRef}\nAttached is the transfer proof.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Transfer Slip on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleReceiptSubmit} className="space-y-4">
                <h4 className="text-xl font-bold font-cinzel text-[#6B111A]">
                  Request Official e-Receipt
                </h4>
                <p className="text-xs text-zinc-600">
                  Enter your transfer slip reference number to register your contribution in the temple records.
                </p>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                    Donor Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Anandha Kumar"
                    className="w-full px-3.5 py-2 bg-white border border-amber-200 rounded-xl text-xs text-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="e.g. +60 12-345 6789"
                    className="w-full px-3.5 py-2 bg-white border border-amber-200 rounded-xl text-xs text-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">
                    Bank Reference / Slip Number
                  </label>
                  <input
                    type="text"
                    value={txnRef}
                    onChange={(e) => setTxnRef(e.target.value)}
                    placeholder="e.g. MBB-98347123"
                    className="w-full px-3.5 py-2 bg-white border border-amber-200 rounded-xl text-xs text-zinc-900"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReceiptModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 hover:bg-zinc-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#6B111A] text-amber-100 font-bold px-5 py-2 rounded-xl text-xs shadow-md"
                  >
                    Generate Acknowledgment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
