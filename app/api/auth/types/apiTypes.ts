export type ErrorResponse = {
  statusCode: number;
  message: string;
};

export type SuccessResponse = {
  message: string;
};

export type UserLoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type UserSignupResponse = {
  authEmailId: number;
  email: string;
  emailStatus: string;
  id: number;
};

export type TokenInfo = {
  role: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
};

export type Prefecture = {
  id: number;
  name: string;
  code: string;
};

export type City = {
  id: number;
  name: string;
  code: string;
  bigCityFlag: number;
  prefecture: {
    id: number;
  };
};
export type Label = {
  id: number;
  name: string;
};

export type Labels = {
  data: any;
};

export type Property = {
  id: number;
  property_name: string;
};

export type BuyerResponseOnProposalCountMeta = {
  sent: number;
  opened: number;
  purchaseIntention: number;
};

export type User = {
  id: number;
  pin: string;
  name: string;
  email: string;
};

export type Session = {
  expires: string;
  user: User;
};

export type PagingOptionType = {
  page?: number;
  per_page?: number;
};

export type RegistrationRecordsType = {
  showAll: string;
} & PagingOptionType;
