export default function EmergencyDisclaimer() {
  return (
    <div
      className="flex gap-3 items-start bg-[rgba(217,150,61,0.1)] border border-[#D9963D] rounded-[12px] p-4 mb-6"
      role="alert"
    >
      <span
        className="text-[#D9963D] flex-shrink-0 text-[18px] mt-0.5"
        aria-hidden="true"
      >
        ⚠️
      </span>
      <div>
        <p className="text-[13px] font-bold text-[#D9963D] mb-0.5">
          إذا كنتِ في خطر فوري أو جسدي
        </p>
        <p className="text-[13px] text-[#211A22] leading-[1.7]">
          تواصلي مع الطوارئ أو جهة أمان محلية مناسبة.
          <br />
          مؤنث سالم تستجيب خلال أيام عمل — وليست خط أزمات فوريًا.
        </p>
      </div>
    </div>
  );
}
