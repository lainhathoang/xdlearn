export interface Bootcamp {
  _id: string;
  name: string;
  description: string;
    website: string;
  //   phone: string;
  //   email: string;
  //   careers: string[];
    photo: string;
  //   housing: boolean;
  //   jobAssistance: boolean;
  //   jobGuarantee: boolean;
  //   acceptGi: boolean;
  //   user: string;
  //   createdAt: string;
  //   slug: string;
  //   averageCost: number;
  //   averageRating: number;
    courses: Course[];
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  weeks: string;
  tuition: number;
  minimumSkill: string[];
  bootcamp: string;
  user: string;
}

interface Location {
  type: string;
  coordinates: number[];
  formattedAddress: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}


