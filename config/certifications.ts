export type Certification = {
  name: string;
  issuer?: string;
  credential?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Kubernetes Certified Application Developer (CKAD)",
    issuer: "Udemy",
    credential: "UC-ff088881-2026-4278-9c4a-24e751dd1535",
    url: "https://ude.my/UC-ff088881-2026-4278-9c4a-24e751dd1535",
  },
];
