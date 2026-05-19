export type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

export type CreateUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
};
