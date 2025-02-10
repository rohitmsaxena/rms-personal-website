import { ReactNode } from "react";

interface ProfileSectionProps {
  children: ReactNode;
  title: string;
  sectionId: string;
}

export default function ProfileSection({
  children,
  title,
  sectionId,
}: ProfileSectionProps) {
  return (
    <section id={sectionId} className="py-12 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}
