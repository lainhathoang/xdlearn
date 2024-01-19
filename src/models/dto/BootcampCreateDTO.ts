export interface BootcampCreateDTO {
  name: string;
  description: string;
  website: string;
  phone: string;
  email: string;
  address: string;
  careers: string[];
  photo: string;
  housing: boolean;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  acceptGi: boolean;
}
